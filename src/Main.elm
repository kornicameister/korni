module Main exposing (Model, Msg(..), init, main, update, view)

import Browser
import Browser.Navigation
import Html as H
import Html.Attributes as A
import Task
import Url
import View.Navigation



---- MODEL ----


type alias Model =
    { version : String
    , navigationModel : View.Navigation.Model
    }


init :
    { version : String, trianglifyDataUris : List String }
    -> Url.Url
    -> Browser.Navigation.Key
    -> ( Model, Cmd Msg )
init { version, trianglifyDataUris } navigationKey url =
    let
        ( navigationModel, navigationMsg ) =
            View.Navigation.init trianglifyDataUris
    in
    ( { version = version
      , navigationModel = navigationModel
      }
    , navigationMsg |> Cmd.map NavigationMsg
    )



---- VIEW ----


view : Model -> Browser.Document Msg
view model =
    { title = "Korni"
    , body =
        [ H.main_ []
            [ H.header []
                [ H.h1 [] [ H.strong [] [ [ "korni", model.version ] |> String.join "@" |> H.text ] ]
                ]
            , H.section [ A.class "logo" ]
                [ H.img [ A.src "%PUBLIC_URL%/logo.png" ] []
                ]
            , View.Navigation.view model.navigationModel
                |> H.map NavigationMsg
            ]
        ]
    }



---- UPDATE ----


type Msg
    = NavigationMsg View.Navigation.Msg
    | URLChanged Url.Url
    | LinkClicked Browser.UrlRequest


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NavigationMsg innerMsg ->
            let
                ( nextModel, nextMsg ) =
                    View.Navigation.update innerMsg model.navigationModel
            in
            ( { model | navigationModel = nextModel }, nextMsg |> Cmd.map NavigationMsg )

        URLChanged url ->
            ( model, Cmd.none )

        LinkClicked request ->
            ( model, Cmd.none )



---- PROGRAM ----


main : Program { version : String, trianglifyDataUris : List String } Model Msg
main =
    Browser.application
        { view = view
        , init = init
        , update = update
        , subscriptions = always Sub.none
        , onUrlChange = URLChanged
        , onUrlRequest = LinkClicked
        }

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
    , navKey : Browser.Navigation.Key
    , navigationModel : View.Navigation.Model
    }


init :
    { version : String, trianglifyDataUris : List String }
    -> Url.Url
    -> Browser.Navigation.Key
    -> ( Model, Cmd Msg )
init { version, trianglifyDataUris } url navKey =
    let
        ( navigationModel, navigationMsg ) =
            View.Navigation.init trianglifyDataUris
    in
    ( { version = version
      , navKey = navKey
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
    | URLRequest Browser.UrlRequest
    | URLChanged Url.Url


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NavigationMsg innerMsg ->
            let
                ( nextModel, nextMsg ) =
                    View.Navigation.update innerMsg model.navigationModel
            in
            ( { model | navigationModel = nextModel }, nextMsg |> Cmd.map NavigationMsg )

        URLRequest request ->
            case request of
                Browser.Internal url ->
                    ( model
                    , Browser.Navigation.pushUrl model.navKey (Url.toString url)
                    )

                Browser.External url ->
                    ( model
                    , Browser.Navigation.load url
                    )

        URLChanged url ->
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
        , onUrlRequest = URLRequest
        }

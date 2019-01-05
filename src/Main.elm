module Main exposing (Model, Msg(..), init, main, update, view)

import Browser as B
import Html as H
import Html.Attributes as A
import Task
import View.Navigation



---- MODEL ----


type alias Model =
    { version : String
    , navigationModel : View.Navigation.Model
    }


init : String -> List String -> ( Model, Cmd Msg )
init version trianglifyDataUris =
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


view : Model -> H.Html Msg
view model =
    H.main_ []
        [ H.header []
            [ H.h1 [] [ H.strong [] [ [ "korni", model.version ] |> String.join "@" |> H.text ] ]
            ]
        , H.section [ A.class "logo" ]
            [ H.img [ A.src "%PUBLIC_URL%/logo.png" ] []
            ]
        , View.Navigation.view model.navigationModel
            |> H.map NavigationMsg
        ]



---- UPDATE ----


type Msg
    = NavigationMsg View.Navigation.Msg


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NavigationMsg innerMsg ->
            let
                ( nextModel, nextMsg ) =
                    View.Navigation.update innerMsg model.navigationModel
            in
            ( { model | navigationModel = nextModel }, nextMsg |> Cmd.map NavigationMsg )



---- PROGRAM ----


main : Program { version : String, trianglifyDataUris : List String } Model Msg
main =
    B.element
        { view = view
        , init = \{ version, trianglifyDataUris } -> init version trianglifyDataUris
        , update = update
        , subscriptions = always Sub.none
        }

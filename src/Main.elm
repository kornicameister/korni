module Main exposing (Model, Msg(..), init, main, update, view)

import Browser as B
import Html as H
import Html.Attributes as A



---- MODEL ----


type alias Model =
    {}


init : ( Model, Cmd Msg )
init =
    ( {}, Cmd.none )



---- UPDATE ----


type Msg
    = NoOp


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    ( model, Cmd.none )



---- VIEW ----


view : Model -> H.Html Msg
view model =
    H.main_ []
        [ H.header [] []
        , H.section [] []
        , H.input [] []
        , H.footer [] []
        ]



---- PROGRAM ----


main : Program () Model Msg
main =
    B.element
        { view = view
        , init = \_ -> init
        , update = update
        , subscriptions = always Sub.none
        }

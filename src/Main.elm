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
        [ H.header []
            [ H.h1 [] [ H.strong [] [ H.text "Korni" ] ]
            ]
        , H.section [ A.class "logo" ]
            [ H.img [ A.src "%PUBLIC_URL%/logo.png" ] []
            ]
        , H.section [ A.class "content" ]
            [ H.div [ A.class "tile", A.style "grid-area" "c11" ] [ H.text "Example" ]
            , H.div [ A.class "tile", A.style "grid-area" "c12" ] [ H.text "Example" ]
            , H.div [ A.class "tile", A.style "grid-area" "c13" ] [ H.text "Example" ]
            , H.div [ A.class "tile", A.style "grid-area" "c14" ] [ H.text "Example" ]
            , H.div [ A.class "tile", A.style "grid-area" "c21" ] [ H.text "Example" ]
            , H.div [ A.class "tile", A.style "grid-area" "c22" ] [ H.text "Example" ]
            , H.div [ A.class "tile", A.style "grid-area" "c23" ] [ H.text "Example" ]
            , H.div [ A.class "tile", A.style "grid-area" "c24" ] [ H.text "Example" ]
            , H.div [ A.class "tile", A.style "grid-area" "c31" ] [ H.text "Example" ]
            , H.div [ A.class "tile", A.style "grid-area" "c32" ] [ H.text "Example" ]
            , H.div [ A.class "tile", A.style "grid-area" "c33" ] [ H.text "Example" ]
            , H.div [ A.class "tile", A.style "grid-area" "c34" ] [ H.text "Example" ]
            , H.div [ A.class "tile", A.style "grid-area" "c41" ] [ H.text "Example" ]
            , H.div [ A.class "tile", A.style "grid-area" "c42" ] [ H.text "Example" ]
            , H.div [ A.class "tile", A.style "grid-area" "c43" ] [ H.text "Example" ]
            , H.div [ A.class "tile", A.style "grid-area" "c44" ] [ H.text "Example" ]
            ]
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

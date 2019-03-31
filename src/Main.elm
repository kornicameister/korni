module Main exposing (Model, Msg(..), init, main, update, view)

import Browser
import Browser.Navigation
import FontAwesome.Attributes as Icon
import FontAwesome.Brands as Icon
import FontAwesome.Icon as Icon
import FontAwesome.Solid as Icon
import FontAwesome.Styles as Icon
import Html as H
import Html.Attributes as A
import Url



---- MODEL ----


type alias Model =
    { version : String
    , navKey : Browser.Navigation.Key
    }


type alias Version =
    String


init : Version -> Url.Url -> Browser.Navigation.Key -> ( Model, Cmd Msg )
init version _ navKey =
    ( { version = version
      , navKey = navKey
      }
    , Cmd.none
    )



---- VIEW ----


view : Model -> Browser.Document Msg
view _ =
    { title = "Korni"
    , body =
        [ H.main_ []
            [ Icon.css
            , H.ul [ A.class "timeline" ]
                [ H.li [ A.class "event", A.attribute "data-date" "2018-today" ]
                    [ H.h3 [] [ H.text "Functional world" ]
                    , H.p []
                        [ H.text "Since "
                        , H.em [] [ H.strong [] [ H.text "glorious" ] ]
                        , H.text " 2018, I have been extending my knowledge regarding "
                        , H.em []
                            [ H.a
                                [ A.href "https://en.wikipedia.org/wiki/Functional_programming"
                                , A.target "_blank"
                                ]
                                [ H.text "functional programming" ]
                            ]
                        , H.text "."
                        ]
                    , H.p [] [ H.i [] [ H.text "How did it all start?" ] ]
                    , H.p [] [ H.text "The story goes back to me joining ", H.em [] [ H.a [] [ H.text "EOS" ] ], H.text " project" ]
                    ]
                ]
            ]
        ]
    }



---- UPDATE ----


type Msg
    = URLRequest Browser.UrlRequest
    | URLChanged Url.Url


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
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

        URLChanged _ ->
            ( model, Cmd.none )



---- PROGRAM ----


main : Program Version Model Msg
main =
    Browser.application
        { view = view
        , init = init
        , update = update
        , subscriptions = always Sub.none
        , onUrlChange = URLChanged
        , onUrlRequest = URLRequest
        }

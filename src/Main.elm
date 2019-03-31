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
                    [ H.h3 [] [ Icon.viewStyled [ Icon.fw, Icon.fa2x, Icon.pullLeft, Icon.border ] Icon.cat, H.text "Functional world" ]
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
                    , H.p []
                        [ H.text "The story goes back to me joining "
                        , H.em []
                            [ H.a [ A.href "http://docs.fcsm.io/", A.target "_blank" ] [ H.text "EOS" ]
                            ]
                        , H.text " project. "
                        , H.text "Long story short, but that project was the one that set me on my way functional path. "
                        , H.text "Currently I can tell that I know following languages: "
                        , H.ul [ Icon.ul ]
                            [ H.li [] [ H.span [ Icon.li ] [ Icon.viewStyled [ Icon.fw, Icon.pullLeft ] Icon.book ], H.text "Elm" ]
                            , H.li [] [ H.span [ Icon.li ] [ Icon.viewStyled [ Icon.fw, Icon.pullLeft ] Icon.book ], H.text "Haskell" ]
                            , H.li [] [ H.span [ Icon.li ] [ Icon.viewStyled [ Icon.fw, Icon.pullLeft ] Icon.book ], H.text "F#" ]
                            ]
                        ]
                    , H.p []
                        [ H.text "If you are looking for an example, you do not have to look far, "
                        , H.strong [] [ H.text "this" ]
                        , H.text " page was built with "
                        , H.em [] [ H.a [ A.href "https://elm-lang.org", A.target "_blank" ] [ H.text "Elm" ] ]
                        , H.text "."
                        ]
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

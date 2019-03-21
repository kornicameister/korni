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


init :
    { version : String, trianglifyDataUris : List String }
    -> Url.Url
    -> Browser.Navigation.Key
    -> ( Model, Cmd Msg )
init { version } _ navKey =
    ( { version = version
      , navKey = navKey
      }
    , Cmd.none
    )



---- VIEW ----


view : Model -> Browser.Document Msg
view model =
    { title = "Korni"
    , body =
        [ H.main_ []
            [ Icon.css
            , H.header []
                [ H.h1 []
                    [ H.a [ A.href "/" ] [ Icon.viewStyled [ Icon.fw, Icon.pullLeft ] Icon.home ]
                    , H.span [] [ H.text "kornicameister home page..." ]
                    ]
                , H.h3 [] [ model.version |> H.text ]
                ]
            , H.section [ A.class "logo" ]
                [ H.img [ A.src "%PUBLIC_URL%/logo.png" ] []
                ]
            , H.nav []
                [ H.a [] [ Icon.viewStyled [ Icon.fw, Icon.fa2x ] Icon.tachometerAlt ]
                , H.a [] [ Icon.viewStyled [ Icon.fw, Icon.fa2x ] Icon.blog ]
                , H.a
                    [ A.href "https://www.linkedin.com/in/tomasz-trębski"
                    , A.title "My LinkedIn profile"
                    , A.target "_blank"
                    ]
                    [ Icon.viewStyled [ Icon.fw, Icon.fa2x ] Icon.linkedin ]
                , H.a
                    [ A.href "https://www.github.com/kornicameister"
                    , A.title "My Github profile"
                    , A.target "_blank"
                    ]
                    [ Icon.viewStyled [ Icon.fw, Icon.fa2x ] Icon.github ]
                , H.a
                    [ A.href "https://www.gitlab.com/kornicameister"
                    , A.title "My Gitlab profile"
                    , A.target "_blank"
                    ]
                    [ Icon.viewStyled [ Icon.fw, Icon.fa2x ] Icon.gitlab ]
                ]
            , H.article [ A.class "content" ]
                [ H.h1 [ A.class "greeting" ] [ H.text "Boya mates" ]
                , H.section []
                    [ H.p []
                        [ H.text "I am "
                        , H.strong [] [ H.text "kornicameister" ]
                        , H.text " also known as "
                        , H.i [] [ H.text "Tomasz Trębski." ]
                        ]
                    ]
                , H.section []
                    [ H.p []
                        [ H.text "Born in 1990 in Łowicz, Poland - I actually never thought my journey with computers "
                        , H.text "might be something more than playing video games or being exhausted after being forced to write those "
                        , H.text "\"hello-world\"-ish programs in Pascal during my high school classes. "
                        , H.strong [] [ H.text "I was so wrong, wasn't I?" ]
                        ]
                    ]
                , H.section []
                    [ H.p []
                        [ H.text "I think that some credit must be given to my classmate from the time I was doing my engineering degree "
                        , H.text " from Logistic. He was, back then, about to graduate with the same degree from computer science. "
                        , H.text "As a extracurricular activity; ha has infected me with the love for programming"
                        ]
                    ]
                , H.section []
                    [ H.p []
                        [ H.text "I started out by doing simple C/C++ programs, just to get myself familiar with the world I was "
                        , H.text "entering. After that I met Java and I think that it kept me busy for around 3 years, including "
                        , H.text "my first 2 years of professional career. "
                        , H.text "Then, I joined Python camp and I have been its faitful member since 2015."
                        ]
                    , H.hr [] []
                    , H.p []
                        [ H.text "But I haven't stopped there and I am still exploring this wonderful world that allowed me to "
                        , H.text "indulge my passion to learn, give me only so much joy a challange can bring "
                        , H.text "and, last but no less important, to start a family to share a life. "
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

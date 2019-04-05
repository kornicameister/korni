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
        [ H.div [ A.id "root" ]
            [ Icon.css
            , H.aside []
                [ H.nav [] []
                , H.footer [] []
                ]
            , H.main_ []
                [ timeline
                ]
            ]
        ]
    }


timeline : H.Html never
timeline =
    H.ul [ A.class "timeline" ]
        [ H.li [ A.class "event" ]
            [ H.h3 [ A.class "header" ]
                [ Icon.viewStyled [ Icon.fw, Icon.fa2x, Icon.pullLeft, Icon.border ] Icon.cat
                , H.text "Functional world"
                ]
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
                , H.ul []
                    [ H.li []
                        [ H.a [ A.href "https://elm-lang.org", A.target "_blank" ]
                            [ H.img
                                [ A.src "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Elm_logo.svg/512px-Elm_logo.svg.png"
                                , A.title "Elm"
                                , A.alt "Elm logo"
                                ]
                                []
                            ]
                        ]
                    , H.li []
                        [ H.a [ A.href "https://www.haskell.org/", A.target "_blank" ]
                            [ H.img
                                [ A.src "https://evenmere.org/~bts/haskell-logo/logo-0.svg"
                                , A.title "Haskell"
                                , A.alt "Haskell logo"
                                ]
                                []
                            ]
                        ]
                    , H.li []
                        [ H.a [ A.href "https://fsharp.org/", A.target "_blank" ]
                            [ H.img
                                [ A.src "http://fsharp.org/img/logo/fsharp.svg"
                                , A.title "F#"
                                , A.alt "F#"
                                ]
                                []
                            ]
                        ]
                    ]
                ]
            , H.p []
                [ H.text "If you are looking for an example, you do not have to look far, "
                , H.strong [] [ H.text "this" ]
                , H.text " page was built with "
                , H.em []
                    [ H.span [ A.style "color" "red" ] [ Icon.viewStyled [ Icon.fw ] Icon.heart ]
                    , H.a [ A.href "https://elm-lang.org", A.target "_blank" ] [ H.text "Elm" ]
                    ]
                , H.text "."
                ]
            , H.p []
                [ H.text "I am currently in a process of learning how to learn others with functional programming. "
                , H.text "I find this goal very "
                , H.em [] [ H.text "important" ]
                , H.text " to pursue. "
                , H.text "Reason is quite simple! "
                , H.text "Since early years of studies, my and others heads were filled with imperative programming model. "
                , H.text "Learning something opposite, at least for me, "
                , H.strong [] [ H.text "rebooting" ]
                , H.text " my mind. Not to mention about boosting up soft skills, especially an ability to share the accumulated knowledge."
                ]
            ]
        , H.li [ A.class "event" ]
            [ H.h3 [ A.class "header" ]
                [ Icon.viewStyled [ Icon.fw, Icon.fa2x, Icon.pullLeft, Icon.border ] Icon.python
                , H.text "Logging & Monitoring"
                ]
            , H.p []
                [ H.a
                    [ A.href "https://monasca.io"
                    , A.target "_blank"
                    ]
                    [ H.strong [] [ H.text "monasca" ] ]
                , H.text " was my first serious assignment in Fujitsu. "
                , H.text "We have concentrated on enhancing "
                , H.em [] [ H.text "Openstack" ]
                , H.text " monitoring solution with "
                , H.strong [] [ H.text "collecting" ]
                , H.text " and "
                , H.strong [] [ H.text "analyzing" ]
                , H.text " logs. "
                , H.text "All of the work I have done was done with the little help of "
                , H.a [ A.href "https://www.python.org/", A.target "_blank", A.title "Python" ] [ Icon.viewStyled [ Icon.fw ] Icon.python ]
                , H.text ". "
                , H.text "Needless to say that I learnt a lot of that language, going from not knowing a thing about it "
                , H.text "to mastering its strenthgs. "
                , H.text "It is worth mentioning that I was "
                , H.strong [] [ H.text "core" ]
                , H.text " contributor for "
                , H.a
                    [ A.href "http://monasca.io/"
                    , A.target "_blank"
                    ]
                    [ H.strong [] [ H.text "monasca" ] ]
                , H.text " inside of Fujitsu. "
                , H.text "And those were not commits only but also code reviews."
                ]
            , H.p []
                [ H.text "My contributions can still be examined in following locations:"
                , H.ul []
                    [ H.li []
                        [ H.a
                            [ A.href "http://stackalytics.com/?user_id=kornicameister&release=all&project_type=all"
                            , A.target "_blank"
                            , A.style "display" "flex"
                            ]
                            [ H.img
                                [ A.src "%PUBLIC_URL%/stackalytics_logo.png"
                                , A.alt "Stackanalytics for Openstack"
                                , A.title "Stackanalytics for Openstack"
                                , A.style "height" "20px"
                                ]
                                []
                            ]
                        ]
                    , H.li []
                        [ H.a
                            [ A.href "https://review.openstack.org/#/q/owner:trebskit+status:merged"
                            , A.target "_blank"
                            , A.style "display" "flex"
                            ]
                            [ H.img
                                [ A.src "%PUBLIC_URL%/gerrit_logo.svg"
                                , A.alt "Openstack Gerrit"
                                , A.title "Openstack Gerrit"
                                , A.style "height" "20px"
                                ]
                                []
                            ]
                        ]
                    ]
                , H.text "."
                ]
            ]
        , H.li [ A.class "event" ]
            [ H.h3 [ A.class "header" ]
                [ Icon.viewStyled [ Icon.fw, Icon.fa2x, Icon.pullLeft, Icon.border ] Icon.java
                , H.text "Cooking the beans"
                ]
            , H.p []
                [ H.strong [] [ H.text "First" ]
                , H.text " real work together with "
                , H.a
                    [ A.href "https://tt.com.pl"
                    , A.target "_blank"
                    ]
                    [ H.text "Transition Technologies" ]
                , H.text "."
                ]
            , H.p []
                [ H.text "I think that what best describes this part of my life is being confronted "
                , H.text " with the real world. No more professors but real deal people to "
                , H.text "appreciate me or to blame me for not doing something right."
                ]
            , H.p []
                [ H.text "I have learnt a great deal about Java and doing things in it."
                , H.text "Everything was Java, not only at work but also theses. "
                , H.text "Spring-* was my best friend for quite some time "
                , H.span [ A.class "emoji" ] [ H.text "\u{1F923}" ]
                , H.text "."
                ]
            ]
        , H.li [ A.class "event" ]
            [ H.h3 [ A.class "header" ]
                [ Icon.viewStyled [ Icon.fw, Icon.fa2x, Icon.pullLeft, Icon.border ] Icon.heart
                , H.text "Beginning"
                ]
            , H.p []
                [ H.text "Beginnings are often hard and it was the case for me as well. "
                , H.text "Starting out with "
                , H.em [] [ H.text "Pascal" ]
                , H.text " was not very good choice."
                , H.text "I felt like I cannot do anything."
                ]
            , H.p []
                [ H.text "Resurection of, what later has become a "
                , H.strong [] [ H.text "passion" ]
                , H.text " came when I was a student. "
                , H.text "Who would've thought that starting out with "
                , H.strong [] [ H.text "C++" ]
                , H.text " and "
                , H.strong [] [ H.text "Qt" ]
                , H.text " will lead to exploring depths of objective and functional programming in future."
                ]
            ]
        ]



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

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
import Http
import Json.Decode as Decode
import RemoteData
import Url



---- MODEL ----


type alias Model =
    { version : String
    , navKey : Browser.Navigation.Key
    , whatPulse :
        { profile : RemoteData.WebData WhatPulseProfile
        }
    }


type alias Version =
    String


init : Version -> Url.Url -> Browser.Navigation.Key -> ( Model, Cmd Msg )
init version _ navKey =
    ( { version = version
      , navKey = navKey
      , whatPulse =
            { profile = RemoteData.Loading
            }
      }
    , getWhatpulseProfile
    )



---- REQUESTS ----


type alias WhatPulseProfile =
    { totalKeys : Int
    , totalClicks : Int
    , rankKeys : Int
    , rankClicks : Int
    }


getWhatpulseProfile : Cmd Msg
getWhatpulseProfile =
    let
        decodeStringToInt =
            String.toInt >> Maybe.map Decode.succeed >> Maybe.withDefault (Decode.fail <| "Failed to decode String to Int")

        decoder =
            Decode.map4 WhatPulseProfile
                (Decode.field "Keys" Decode.string |> Decode.andThen decodeStringToInt)
                (Decode.field "Clicks" Decode.string |> Decode.andThen decodeStringToInt)
                (Decode.at [ "Ranks", "Keys" ] Decode.string |> Decode.andThen decodeStringToInt)
                (Decode.at [ "Ranks", "Clicks" ] Decode.string |> Decode.andThen decodeStringToInt)
    in
    Http.get
        { url = "http://api.whatpulse.org/user.php?user=kornicameister&format=json"
        , expect = Http.expectJson (RemoteData.fromResult >> GotWhatPulseProfile) decoder
        }



---- VIEW ----


view : Model -> Browser.Document Msg
view model =
    { title = "Korni"
    , body =
        [ H.main_ []
            [ Icon.css
            , header model.version
            , footer model.whatPulse.profile
            , H.section [ A.class "avatar" ]
                [ H.a
                    [ A.href "https://www.github.com/kornicameister"
                    , A.title "My Github profile"
                    , A.target "_blank"
                    ]
                    [ H.img [ A.src "%PUBLIC_URL%/logo.png" ] []
                    ]
                , H.span [ A.class "caption is-grey" ]
                    [ H.text "My github profile"
                    ]
                ]
            , navigation
            , content
            ]
        ]
    }


header : Version -> H.Html never
header version =
    H.header []
        [ H.h1 [ A.class "header" ]
            [ H.a [ A.href "/" ] [ Icon.viewStyled [ Icon.fw, Icon.pullLeft ] Icon.home ]
            , H.span [] [ H.text "kornicameister home page..." ]
            ]
        , H.h3 [ A.class "version" ] [ version |> H.text ]
        ]


footer : RemoteData.WebData WhatPulseProfile -> H.Html never
footer whatPulse =
    H.footer []
        [ case whatPulse of
            RemoteData.NotAsked ->
                H.text ""

            RemoteData.Loading ->
                Icon.viewStyled [ Icon.fw, Icon.fa2x, Icon.spin ] Icon.spinner

            RemoteData.Failure _ ->
                H.text ""

            RemoteData.Success { totalKeys, totalClicks, rankClicks, rankKeys } ->
                H.div [ A.class "side-by-side" ]
                    [ H.div [ A.class "left-side" ]
                        [ H.img [ A.src "https://whatpulse.org/images/dashboard/logo.png" ] []
                        ]
                    , H.div [ A.class "right-side" ]
                        [ H.p [] [ H.strong [] [ H.text "Rank" ] ]
                        , H.p [] [ H.strong [] [ H.text "Total" ] ]
                        ]
                    ]
        ]


navigation : H.Html never
navigation =
    H.nav []
        [ H.a
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


content : H.Html never
content =
    H.article [ A.class "content" ]
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



---- UPDATE ----


type Msg
    = URLRequest Browser.UrlRequest
    | URLChanged Url.Url
    | GotWhatPulseProfile (RemoteData.WebData WhatPulseProfile)


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        GotWhatPulseProfile result ->
            let
                oldWhatPulse =
                    model.whatPulse

                newWhatPulse =
                    { oldWhatPulse | profile = result }
            in
            ( { model | whatPulse = newWhatPulse }, Cmd.none )

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

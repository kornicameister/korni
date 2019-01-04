module View.Navigation exposing (Model, Msg, init, update, view)

import Html as H
import Html.Attributes as A
import Random
import Random.List
import Task



--- MODEL


type alias Model =
    { cells : List Cell
    , randomTrianglifyGenerator : Random.Generator ( Maybe String, List String )
    }


type alias Cell =
    { gridArea : String
    , title : String
    , trianglifyDataUri : Maybe String
    }


init : List String -> ( Model, Cmd Msg )
init trianglifyDataUris =
    let
        cells =
            [ { gridArea = "c11", title = "example", trianglifyDataUri = Nothing }
            , { gridArea = "c12", title = "example", trianglifyDataUri = Nothing }
            , { gridArea = "c13", title = "example", trianglifyDataUri = Nothing }
            , { gridArea = "c14", title = "example", trianglifyDataUri = Nothing }
            , { gridArea = "c21", title = "example", trianglifyDataUri = Nothing }
            , { gridArea = "c22", title = "example", trianglifyDataUri = Nothing }
            , { gridArea = "c23", title = "example", trianglifyDataUri = Nothing }
            , { gridArea = "c24", title = "example", trianglifyDataUri = Nothing }
            , { gridArea = "c31", title = "example", trianglifyDataUri = Nothing }
            , { gridArea = "c32", title = "example", trianglifyDataUri = Nothing }
            , { gridArea = "c33", title = "example", trianglifyDataUri = Nothing }
            , { gridArea = "c34", title = "example", trianglifyDataUri = Nothing }
            , { gridArea = "c41", title = "example", trianglifyDataUri = Nothing }
            , { gridArea = "c42", title = "example", trianglifyDataUri = Nothing }
            , { gridArea = "c43", title = "example", trianglifyDataUri = Nothing }
            , { gridArea = "c44", title = "example", trianglifyDataUri = Nothing }
            ]

        generator =
            Random.List.choose trianglifyDataUris
    in
    ( { cells = cells
      , randomTrianglifyGenerator = generator
      }
    , cells
        |> List.map (\{ gridArea } -> Random.generate (TrianglifyDataUriChoosen gridArea) generator)
        |> Cmd.batch
    )



--- VIEW


view : Model -> H.Html Msg
view model =
    model.cells
        |> List.map
            (\cell ->
                H.div
                    [ A.class "tile"
                    , A.style "grid-area" cell.gridArea
                    , A.style "background"
                        (cell.trianglifyDataUri
                            |> Maybe.map (\url -> "url(" ++ url ++ ") no-repeat")
                            |> Maybe.withDefault ""
                        )
                    ]
                    [ H.h1 [] [ H.text cell.title ] ]
            )
        |> H.section [ A.class "content" ]



--- UPDATE


type Msg
    = TrianglifyDataUriChoosen String ( Maybe String, List String )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        TrianglifyDataUriChoosen gridArea ( Just pattern, _ ) ->
            ( { model
                | cells =
                    model.cells
                        |> List.map
                            (\cell ->
                                if cell.gridArea == gridArea then
                                    { cell | trianglifyDataUri = Just pattern }

                                else
                                    cell
                            )
              }
            , Cmd.none
            )

        TrianglifyDataUriChoosen _ _ ->
            ( model, Cmd.none )

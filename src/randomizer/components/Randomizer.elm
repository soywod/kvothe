module Randomizer exposing (main)

import Random
import Array exposing (Array, get)
import Html exposing (Html, button, div, text)
import Html.Events exposing (onClick)
import Maybe exposing (withDefault)


type Msg
    = NextNote
    | RandomNote Int


type alias Model =
    { note : Note }


type alias Note =
    ( NoteName, NoteAlt )


type NoteName
    = A
    | B
    | C
    | D
    | E
    | F
    | G


type NoteAlt
    = Flat
    | Natural
    | Sharp


notes : Array ( NoteName, NoteAlt )
notes =
    let
        names =
            Array.fromList [ A, B, C, D, E, F, G ]

        alts =
            Array.fromList [ Flat, Natural, Sharp ]

        getNoteIndex x =
            ( x % 7, x % 3 )

        getMaybeNote ( x, y ) =
            ( get x names, get y alts )

        getNote ( x, y ) =
            ( withDefault A x, withDefault Natural y )
    in
        List.range 0 20
            |> Array.fromList
            |> Array.map (getNote << getMaybeNote << getNoteIndex)


main : Program Never Model Msg
main =
    Html.program
        { init = init
        , update = update
        , view = view
        , subscriptions = subscriptions
        }


init : ( Model, Cmd Msg )
init =
    let
        note =
            ( A, Natural )

        model =
            { note = note }
    in
        ( model, Cmd.none )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NextNote ->
            ( model, Random.generate RandomNote (Random.int 0 20) )

        RandomNote randomIndex ->
            let
                note =
                    get randomIndex notes

                nextModel =
                    { note = withDefault ( A, Natural ) note }

                ( name, alt ) =
                    model.note

                ( nextName, nextAlt ) =
                    nextModel.note

                command =
                    if name == nextName && alt == nextAlt then
                        Random.generate RandomNote (Random.int 0 20)
                    else
                        Cmd.none
            in
                ( nextModel, command )


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none


view : Model -> Html Msg
view model =
    div
        []
        [ button [ onClick NextNote ] [ text "Random note" ]
        , model.note |> toString |> text
        ]


toString : ( NoteName, NoteAlt ) -> String
toString ( name, alt ) =
    let
        strName =
            case name of
                A ->
                    "A"

                B ->
                    "B"

                C ->
                    "C"

                D ->
                    "D"

                E ->
                    "E"

                F ->
                    "F"

                G ->
                    "G"

        strAlt =
            case alt of
                Flat ->
                    "♭"

                Natural ->
                    ""

                Sharp ->
                    "♯"
    in
        strName ++ strAlt

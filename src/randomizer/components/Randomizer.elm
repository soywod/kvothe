module Randomizer exposing (main)

import Html exposing (Html, button, div, text)
import Html.Events exposing (onClick)
import Random exposing (..)


type Msg
    = NextNote
    | RandomNoteName Int
    | RandomNoteAlt Int


type alias Model =
    { note : Note }


type alias Note =
    { name : NoteName
    , alt : NoteAlt
    }


type NoteName
    = A
    | B
    | C
    | D
    | E
    | F
    | G


type NoteAlt
    = FLAT
    | NATURAL
    | SHARP


toString : Model -> String
toString model =
    let
        name =
            case model.note.name of
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

        alt =
            case model.note.alt of
                FLAT ->
                    "♭"

                NATURAL ->
                    ""

                SHARP ->
                    "♯"
    in
        name ++ alt


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
            { name = A, alt = NATURAL }

        model =
            { note = note }
    in
        ( model, Cmd.none )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NextNote ->
            ( model, Random.generate RandomNoteName (Random.int 1 7) )

        RandomNoteName rand ->
            let
                name =
                    case rand of
                        1 ->
                            A

                        2 ->
                            B

                        3 ->
                            C

                        4 ->
                            D

                        5 ->
                            E

                        6 ->
                            F

                        _ ->
                            G

                note =
                    { name = name
                    , alt = model.note.alt
                    }

                nextModel =
                    { note = note }
            in
                ( nextModel, Random.generate RandomNoteAlt (Random.int 1 3) )

        RandomNoteAlt rand ->
            let
                alt =
                    case rand of
                        1 ->
                            FLAT

                        2 ->
                            NATURAL

                        _ ->
                            SHARP

                note =
                    { name = model.note.name
                    , alt = alt
                    }

                nextModel =
                    { note = note }
            in
                ( nextModel, Cmd.none )


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none


view : Model -> Html Msg
view model =
    div
        []
        [ button [ onClick NextNote ] [ text "Random note" ]
        , model |> toString |> text
        ]

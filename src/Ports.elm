port module Ports exposing (WakatimeStatsResponse, receiveWakatimeStats)

import Json.Decode as Decode


type alias WakatimeStatsResponse =
    { category : String
    , data : Decode.Value
    }


port receiveWakatimeStats : (WakatimeStatsResponse -> msg) -> Sub msg

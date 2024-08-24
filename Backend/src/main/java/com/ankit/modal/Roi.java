package com.ankit.modal;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class Roi {
    @JsonProperty("times")
    private double times;

    @JsonProperty("currency")
    private String currency;
}

package com.ankit.converter;

import com.ankit.modal.Roi;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

@Converter(autoApply = true)
public class RoiConverter implements AttributeConverter<Roi, String> {

    private static final ObjectMapper objectMapper = new ObjectMapper();

    @Override
    public String convertToDatabaseColumn(Roi roi) {
        try {
            return objectMapper.writeValueAsString(roi);
        } catch (JsonProcessingException e) {
            throw new RuntimeException("Failed to convert Roi to JSON", e);
        }
    }

    @Override
    public Roi convertToEntityAttribute(String dbData) {
        try {
            return objectMapper.readValue(dbData, Roi.class);
        } catch (JsonMappingException e) {
            throw new RuntimeException("Failed to map JSON to Roi", e);
        } catch (JsonProcessingException e) {
            throw new RuntimeException("Failed to process JSON", e);
        }
    }
}

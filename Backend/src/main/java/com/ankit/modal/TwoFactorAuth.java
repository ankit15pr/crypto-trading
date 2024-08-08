package com.ankit.modal;

import com.ankit.domain.VerificationType;
import lombok.Data;

@Data
public class TwoFactorAuth {
    private boolean isEnabled = false;
    //Enum
    private VerificationType sendTo;
}

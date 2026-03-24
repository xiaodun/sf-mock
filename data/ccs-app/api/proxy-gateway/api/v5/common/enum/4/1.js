(function () {
  return (data) => {
    // GET /api/v5/common/enum/4/1 — MT4 Group enum (version=4, module=GROUP=1)
    // Raw shape: IMT4GroupEnumData — each field is { key: string, label: string }[]
    // currency is special: just key strings used directly
    return {
      "data": {
        "data": {
          "currency": [
            { "key": "USD", "label": "USD" },
            { "key": "EUR", "label": "EUR" },
            { "key": "GBP", "label": "GBP" },
            { "key": "JPY", "label": "JPY" },
            { "key": "AUD", "label": "AUD" },
            { "key": "NZD", "label": "NZD" },
            { "key": "CAD", "label": "CAD" },
            { "key": "CHF", "label": "CHF" },
            { "key": "HKD", "label": "HKD" },
            { "key": "SGD", "label": "SGD" }
          ],
          "otpMode": [
            { "key": "0", "label": "Disabled" },
            { "key": "1", "label": "Enabled" }
          ],
          "news": [
            { "key": "0", "label": "Off" },
            { "key": "1", "label": "On" },
            { "key": "2", "label": "On Read Only" }
          ],
          "newsLanguages": [
            { "key": "1", "label": "English" },
            { "key": "2", "label": "Russian" },
            { "key": "3", "label": "German" },
            { "key": "4", "label": "Chinese" },
            { "key": "5", "label": "Spanish" },
            { "key": "6", "label": "Portuguese" },
            { "key": "7", "label": "Arabic" }
          ],
          "signal": [
            { "key": "0", "label": "Disable" },
            { "key": "1", "label": "Enable" },
            { "key": "2", "label": "Read Only" }
          ],
          "marginType": [
            { "key": "0", "label": "Percentage" },
            { "key": "1", "label": "Percentage Hedged" }
          ],
          "marginMode": [
            { "key": "0", "label": "Off" },
            { "key": "1", "label": "Auto (daily)" },
            { "key": "2", "label": "Auto (weekly)" }
          ],
          "execution": [
            { "key": "0", "label": "Manual" },
            { "key": "1", "label": "Auto" },
            { "key": "2", "label": "Manual / Auto" }
          ],
          "autoCloseOutMode": [
            { "key": "0", "label": "None" },
            { "key": "1", "label": "Enabled" }
          ],
          "commType": [
            { "key": "0", "label": "Fixed in $" },
            { "key": "1", "label": "Points" },
            { "key": "2", "label": "Percent" }
          ],
          "commLots": [
            { "key": "0", "label": "Per Deal" },
            { "key": "1", "label": "Per Lot" },
            { "key": "2", "label": "Per 1/10 Lot" }
          ],
          "commAgentType": [
            { "key": "0", "label": "Fixed in $" },
            { "key": "1", "label": "Points" },
            { "key": "2", "label": "Percent" }
          ],
          "commAgentLots": [
            { "key": "0", "label": "Per Deal" },
            { "key": "1", "label": "Per Lot" },
            { "key": "2", "label": "Per 1/10 Lot" }
          ]
        },
        "code": "0",
        "message": "success"
      },
      "status": 200,
      "tokenStatus": { "expiresAt": 1900000000000, "isValid": true }
    };
  };
})();

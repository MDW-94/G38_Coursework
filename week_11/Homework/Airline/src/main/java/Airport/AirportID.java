package Airport;

public enum AirportID {
    GLA("GLA"),
    EDI("EDI"),
    LON("LON"),
    SPA("SPA"),
    USA("USA");

    private final String code;

    public String getCode() {
        return code;
    }

    AirportID(String code){
        this.code = code;
    }
}

//Think about the architecture of your code first before building!

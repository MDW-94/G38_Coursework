public enum AirportID {
    GLA("GLA"),
    EDI("EDI"),
    LDN("LDN"),
    SPA("SPA"),
    USA("USA");

    private String id;

    AirportID(String id) {
        this.id = id;
    }

    public String getId() {
        return id;
    }
}

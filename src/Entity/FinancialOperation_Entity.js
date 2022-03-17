class FinancialOperation_Entity {
    title = "";
    price = 0.0;
    detail ="";
    side = false;
    date = null;
    recurssive = false;
    financialStatus = "waiting";
    lastMensuality = 0.0;
    isAllMensualityEquals = true;
    creationDate = null;
    endDate = null;
    recurssDuration = 1;
    mensualityNumber = 1;
    mensualityCost = 0.0;

    constructor(
        title = "undefined",
        price = 0.0,
        detail = "",
        side = false,
        date = null,
        recurssive = false,
        financialStatus = "waiting",
        lastMensuality = 0,
        isAllMensualityEquals = true,
        creationDate = new Date(),
        endDate = null,
        recurssDuration = 1,
        mensualityNumber = 1,
        mensualityCost = 0
    ) {
        this.title = title;
        this.price = price;
        this.detail = detail;
        this.side = false;
        this.date = date;
        this.recurssive = recurssive;
        this.financialStatus = financialStatus;
        this.lastMensuality = lastMensuality;
        this.isAllMensualityEquals = isAllMensualityEquals;
        this.creationDate = creationDate;
        this.endDate = endDate;
        this.recurssDuration = recurssDuration;
        this.mensualityNumber = mensualityNumber;
        this.mensualityCost = mensualityCost;
    }
}
export default FinancialOperation_Entity;
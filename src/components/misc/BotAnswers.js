const messages = [
    { id: 1, message: "Does Tickmill offer Cash or Future CFDs?" },
    { id: 2, message: (
            <div className={"ResponseContainer"}>
                <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                <p className={"Response Bot"}>We do offer Cash CFDs that allow you to trade with a continuous price that
                    isn’t subject to an expiration date. The Cash CFD price is derived from the underlying futures
                    contracts.</p>
            </div>
        ) },
    { id: 3, message: "Thanks" },
    { id: 4, message: (
            <div className={"ResponseContainer"}>
                <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                <p className={"Response Bot"}>You are welcome!</p>
            </div>
        ) },
];

export default messages;

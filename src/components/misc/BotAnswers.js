import Branding from "../Branding";

const AccountInformation = [
    {
        id: 1,
        message: (
            <div className={"ResponseContainer"}>
                <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                <p className={"Response Bot"}>
                    Yes, the trading conditions are the same. However, please note that demo accounts operate in a
                    simulated environment which means that no slippage occurs whereas price updates might differ from
                    live accounts.
                </p>
            </div>
        )
    },
    {
        id: 2,
        message: (
            <div className={"ResponseContainer"}>
                <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                <p className={"Response Bot"}>
                    Yes. Simply send an email with your demo account number and decided balance to our <a
                    title="Support Team" href="https://www.tickmill.eu/about/contact-us" target="_blank">Support
                    team</a>.
                </p>
            </div>
        )
    },
    {
        id: 3,
        message: (
            <div className={"ResponseContainer"}>
                <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                <p className={"Response Bot"}>
                    Yes. Simply send an email with your demo account number and decided balance to our <a
                    title="Support Team" href="https://www.tickmill.eu/about/contact-us" target="_blank">Support
                    team</a>.
                </p>
            </div>
        )
    },
    {
        id: 4,
        message: (
            <div className={"ResponseContainer"}>
                <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                <p className={"Response Bot"}>
                    Yes. In order to do so, install a MetaTrader platform in different folders on your computer for each
                    of your trading accounts.
                </p>
            </div>
        )
    },
    {
        id: 5,
        message: (
            <div className={"ResponseContainer"}>
                <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                <p className={"Response Bot"}>
                    You can close an account but we will keep your data, in accordance with legislation, on our files
                    for a minimum period of 7 years. <br/>If your account is inactive for 60 days or more and the
                    balance is equal or less than 50 GBP/EUR/USD/CHF and/or 250 PLN, your account will be archived.
                </p>
            </div>
        )
    },
    {
        id: 6,
        message: (
            <div className={"ResponseContainer"}>
                <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                <p className={"Response Bot"}>Right-click on the instrument you placed the trade with and use the
                    options ‘Modify the trade’ or ‘Delete the trade’.
                </p>
            </div>
        )
    },
    {
        id: 7,
        message: (
            <div className={"ResponseContainer"}>
                <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                <p className={"Response Bot"}>
                    You can open an account in the Client Area, efficiently and securely. Click <a title="Here"
                                                                                                   target="_blank"
                                                                                                   href="https://secure.tickmill.eu/users/login">here</a> to
                    open an account with us.
                </p>
            </div>
        )
    },
    {
        id: 8,
        message: (
            <div className={"ResponseContainer"}>
                <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                <p className={"Response Bot"}>
                    Go to the <a title="Client Area" href="https://secure.tickmill.eu/users/login" target="_blank">Client
                    Area</a> login page click on the ‘Forgot your Password?’ link under the ‘Login’ button and follow
                    the instructions on how to reset your password. For further assistance, please contact our <a
                    title="Client Support" href="https://www.tickmill.eu/about/contact-us" target="_blank">Client
                    Support</a> team.
                </p>
            </div>
        )
    },
    {
        id: 9,
        message: (
            <div className={"ResponseContainer"}>
                <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                <p className={"Response Bot"}>
                    You can change the password of your MetaTrader 4 or MetaTrader 5 account inside the secure <a
                    title="Client Area" href="https://secure.tickmill.eu/users/login" target="_blank">Client Area</a>.
                    For further assistance, please contact our <a title="Client Support"
                                                                  href="https://www.tickmill.eu/about/contact-us"
                                                                  target="_blank">Client Support</a> team.
                </p>
            </div>
        )
    },
    {
        id: 10,
        message: (
            <div className={"ResponseContainer"}>
                <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                <p className={"Response Bot"}>
                    An account may get archived under certain conditions. If the account balance is equal or less than
                    50 GBP/EUR/USD/CHF and/or 250 PLN and there were no login attempts to the trading platform or no
                    trading activity, no open positions and no withdrawals or deposits made for at least 60 days, then
                    the account will be automatically deactivated and archived by the system and it will no longer be
                    visible in the Client Area. Any balance will be transferred to the wallet.
                </p>
            </div>
        )
    },
    {
        id: 11,
        message: (
            <div className={"ResponseContainer"}>
                <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                <p className={"Response Bot"}>
                    We offer 3 account types: Classic, Pro and VIP. All accounts have the same execution
                    speed.<br/><br/>Their
                    differences are:<br/><br/>Spreads:<br/><br/>The Pro and VIP accounts start at 0.0 pips, whereas the
                    Classic
                    account starts at 1.6 pips.<br/><br/>Commission:<br/> *There is no commission on the Classic
                    account.<br/>*There is a commission of 2 currency units per side per lot (0.0020% notional) on the
                    Pro account in
                    the base currency of the trading instrument. Example: If you trade 1 lot of EURUSD, which has a
                    contract size of 100,000 EUR, then your commission per side would be 2 EUR and 4 EUR round
                    turn.<br/>*There
                    is a commission of 1 currency unit per side per lot (0.0010% notional) on the VIP account in
                    the base currency of the trading instrument. Example: If you trade 1 lot of EURUSD, which has a
                    contract size of 100,000 EUR, then your commission per side would be 1 EUR and 2 EUR round
                    turn.<br/><br/>The minimum deposit for the Pro and Classic account is: 100 USD/EUR/
                    GBP/PLN.<br/><br/>The
                    minimum balance for the VIP account is 50,000 USD/EUR/
                    GBP/PLN.<br/><br/><strong>Important note:</strong> The minimum balance requirement should always be
                    fulfilled to maintain
                    VIP account
                    status. Tickmill reserves the right to change your account type at any time if the above requirement
                    is not met or if any abuse is identified.<br/><br/>You can find out more information about our
                    account
                    types at:<br/><a title="Https://www.tickmill.eu/trading/accounts-overview" target="_blank"
                                     href="https://www.tickmill.eu/trading/accounts-overview">https://www.tickmill.eu/trading/accounts-overview</a>
                </p>
            </div>
        )
    },
    {
        id: 12,
        message: (
            <div className={"ResponseContainer"}>
                <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                <p className={"Response Bot"}>
                    To register for an individual Client Area, you must submit your Proof of Address (POA) and Proof of
                    Identity (POI) documents, whereas to register for a Corporate Client Area, you must
                    submit:<br/><br/>
                    <ol>
                        <li>Articles of association, identification document and proof of individual and corporate
                            address
                        </li>
                        <li>Certificate of incorporation or company registration card (must show the address, legal
                            representatives, registration data)
                        </li>
                    </ol>
                    <br/><br/>
                    We will ask for additional documents depending on the country, beneficiary etc.
                    (offshore:).<br/><br/>E.g.:<br/><br/>
                    <ol>
                        <li>Certificate of incorporation</li>
                        <li>Articles of association</li>
                        <li>Memorandum of understanding</li>
                        <li>Certificate of good standing</li>
                        <li>Certificate of incumbency/ Register of Members</li>
                        <li>POI and POA documents for directors and shareholders</li>
                    </ol>
                </p>
            </div>
        )
    },
    {
        id: 13,
        message: (
            <div className={"ResponseContainer"}>
                <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                <p className={"Response Bot"}>
                    Triple swap charges apply for positions on FX pairs, Silver and Gold that are held overnight on
                    Wednesday. For the rest of the instruments, triple swap charges apply for positions that are held
                    overnight on Friday. This is a standard practice in the forex industry.<br/><br/>These swaps cover
                    the interest for Saturday and Sunday when the markets are closed. All swaps are calculated based on
                    the quote currency.<br/><br/><strong>Example:</strong><br/><br/><em>If you open a long position of 1 lot
                    on EURAUD, the overnight swap charge would be -14.11 Australian Dollars. If you had opened the same
                    position on a Wednesday and roll over the position to the next day, the swap would be -14.11 *
                    3.<br/><br/>If the account currency is in USD, then we have to convert the amount above to USD by
                    using AUDUSD spot rate.</em>
                </p>
            </div>
        )
    },
    {
        id: 14,
        message: (
            <div className={"ResponseContainer"}>
                <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                <p className={"Response Bot"}>
                    We update the swaps based on the rates given to us by our counterparties and we recommend checking
                    the swap rates on a regular basis within the MetaTrader platform. Our updated swaps are always
                    available by clicking here.<br/><br/>You can also check the swap rates by logging into the
                    MetaTrader trading platform and select: View > Symbols > Select instrument > Properties<br/><br/>There
                    are two types of positions: buy and sell. You must look at the Financing long for swaps for buy
                    positions and at the Financing short for swaps for sell positions. Swaps are charged at 00:00
                    platform time.
                </p>
            </div>
        )
    },
    {
        id: 15,
        message: (
            <div className={"ResponseContainer"}>
                <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                <p className={"Response Bot"}>
                    You can find your account balance and trading history in the MetaTrader platform. The account
                    balance can also be seen in your <a title="Client Area"
                                                        href="https://secure.tickmill.eu/users/login" target="_blank">Client
                    Area</a>.
                </p>
            </div>
        )
    },
    {
        id: 16,
        message: (
            <div className={"ResponseContainer"}>
                <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                <p className={"Response Bot"}>
                    As a member of the Investors Compensation Fund (ICF) in Cyprus, all retail clients of Tickmill
                    Europe Ltd are covered in the event of default by Tickmill Europe Ltd. Eligible clients are covered
                    with an amount either equal to twenty thousand Euros (EUR 20,000), or 90% of the covered investor’s
                    claim, whichever is lower (per client).
                </p>
            </div>
        )
    },
];

export default AccountInformation;


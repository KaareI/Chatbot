import Branding from "../Branding";

export const BotResponse = [
    {
        id: 1,
        message: (
            <div className={"ResponseContainer"}>
                <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                <h4 className={"Response Bot"}><em>"Are trading conditions the same on my demo and live account?"</em>
                </h4>
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
                <h4 className={"Response Bot"}><em>"Can I change the balance of my demo account?"</em></h4>
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
                <h4 className={"Response Bot"}><em>"Can I change the settings of my demo account?"</em></h4>
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
                <h4 className={"Response Bot"}><em>"Can I have a demo and live account working at the same time?"</em>
                </h4>
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
                <h4 className={"Response Bot"}><em>"Can the account be closed/deleted?"</em>
                </h4>
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
                <h4 className={"Response Bot"}><em>"How do I modify or delete a trade in the MetaTrader platform?"</em>
                </h4>
                <p className={"Response Bot"}>Right-click on the instrument you placed the trade with and use the
                    options <em>‘Modify the trade’</em> or <em>‘Delete the trade’</em>.
                </p>
            </div>
        )
    },
    {
        id: 7,
        message: (
            <div className={"ResponseContainer"}>
                <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                <h4 className={"Response Bot"}><em>"How do I open a MetaTrader account?"</em>
                </h4>
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
                <h4 className={"Response Bot"}><em>"I forgot my Client Area password. What do I do?"</em>
                </h4>
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
                <h4 className={"Response Bot"}><em>"I forgot my MetaTrader account password. What do I do?"</em>
                </h4>
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
                <h4 className={"Response Bot"}><em>"Is it possible to archive an account that is not in use?"</em>
                </h4>
                <p className={"Response Bot"}>
                    An account may get archived under certain conditions.
                    <br/><br/>
                    <ul>
                        <li>If the account balance is equal to or less than 50 GBP/EUR/USD/CHF and/or 250 PLN.</li>
                        <li>If there have been no login attempts to the trading platform or no trading activity.</li>
                        <li>If there are no open positions and no withdrawals or deposits made for at least 60 days.
                        </li>
                    </ul>
                    <br/>
                    In such cases, the account will be automatically deactivated and archived by the system.
                    Consequently, it will no longer be visible in the Client Area. Any remaining balance will be
                    transferred to the wallet.
                </p>
            </div>
        )
    },
    {
        id: 11,
        message: (
            <div className={"ResponseContainer"}>
                <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                <h4 className={"Response Bot"}><em>"What account types do you offer?"</em>
                </h4>
                <p className={"Response Bot"}>
                    We offer 3 account types: Classic, Pro and VIP. All accounts have the same execution
                    speed. Their differences are:
                </p>
                <p className={"Response Bot"}>
                    <h3>Spreads:</h3>
                    <ul>
                        <li>The Pro and VIP accounts start at 0.0 pips, whereas the Classic account starts at 1.6
                            pips.
                        </li>
                    </ul>
                </p>
                <p className={"Response Bot"}>
                    <h3>Commission:</h3>
                    <ul>
                        <li>*There is no commission on the Classic account.</li>
                        <li>*There is a commission of 2 currency units per side per lot (0.0020% notional) on the Pro
                            account in the base currency of the trading instrument. Example: If you trade 1 lot of
                            EURUSD, which has a contract size of 100,000 EUR, then your commission per side would be 2
                            EUR and 4 EUR round turn.
                        </li>
                        <li>*There is a commission of 1 currency unit per side per lot (0.0010% notional) on the VIP
                            account in the base currency of the trading instrument. Example: If you trade 1 lot of
                            EURUSD, which has a contract size of 100,000 EUR, then your commission per side would be 1
                            EUR and 2 EUR round turn.
                        </li>
                    </ul>
                </p>
                <p className={"Response Bot"}>
                    <h3>Account Minimums:</h3>
                    <ul>
                        <li>The minimum deposit for the Pro and Classic account is: 100 USD/EUR/ GBP/PLN.</li>
                        <li>The minimum balance for the VIP account is 50,000 USD/EUR/ GBP/PLN.</li>
                    </ul>
                </p>
                <p className={"Response Bot"}>
                    <strong>Important note:</strong> The minimum balance requirement should always be fulfilled to
                    maintain VIP account status. Tickmill reserves the right to change your account type at any time if
                    the above requirement is not met or if any abuse is identified.<br/><br/>You can find out more
                    information about our account types at:<br/><a
                    title="Https://www.tickmill.eu/trading/accounts-overview" target="_blank"
                    href="https://www.tickmill.eu/trading/accounts-overview">https://www.tickmill.eu/trading/accounts-overview</a>
                </p>
            </div>
        )
    },
    {
        id: 12,
        message:
            (
                <div className={"ResponseContainer"}>
                    <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                    <h4 className={"Response Bot"}><em>"What are the requirements to register for a Client Area?"</em>
                    </h4>
                    <p className={"Response Bot"}>
                        To register for an individual Client Area, you must submit your Proof of Address (POA) and Proof
                        of
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
                    </p>
                    <p className={"Response Bot"}>
                        We will ask for additional documents depending on the country, beneficiary etc.
                        (offshore:).
                        <br/><br/>E.g.:<br/><br/>
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
    }
    ,
    {
        id: 13,
        message:
            (
                <div className={"ResponseContainer"}>
                    <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                    <h4 className={"Response Bot"}><em>"When are swaps charged at a triple rate for currency pairs
                        and
                        metals?"</em>
                    </h4>
                    <p className={"Response Bot"}>
                        Triple swap charges apply for positions on FX pairs, Silver and Gold that are held overnight
                        on
                        Wednesday.
                        <br/>
                        For the rest of the instruments, triple swap charges apply for positions that are held
                        overnight on Friday. This is a standard practice in the forex industry.
                        <br/><br/>
                        These swaps cover the interest for Saturday and Sunday when the markets are closed. All
                        swaps are calculated based on the quote
                        currency.
                    </p>
                    <p className={"Response Bot"}>
                        <h3>Example:</h3>
                        <em>If you open a long position of 1 lot on EURAUD, the overnight swap charge would be -14.11
                            Australian Dollars. If you had opened the same position on a Wednesday and roll over the
                            position to the next day, the swap would be -14.11 * 3.
                            <br/><br/>
                            If the account currency is
                            in USD, then we have to convert the amount above to USD by using AUDUSD spot rate.
                        </em>
                    </p>
                </div>
            )
    }
    ,
    {
        id: 14,
        message:
            (
                <div className={"ResponseContainer"}>
                    <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                    <h4 className={"Response Bot"}><em>"Where can I check the SWAP rates?"</em>
                    </h4>
                    <p className={"Response Bot"}>
                        We update the swaps based on the rates given to us by our counterparties and we recommend
                        checking the swap rates on a regular basis within the MetaTrader platform. Our updated swaps are
                        always available by clicking <a title="Here"
                                                        href="https://www.tickmill.eu/conditions/spreads-swaps">here</a>.
                    </p>
                    <p className={"Response Bot"}>
                        You can also check the swap rates by logging into the MetaTrader trading platform and select:
                        View > Symbols > Select instrument > Properties
                    </p>
                    <p className={"Response Bot"}>
                        There are two types of positions: buy and sell. You must look at the Financing long for swaps
                        for buy positions and at the Financing short for swaps for sell positions. Swaps are charged at
                        00:00 platform time.
                    </p>
                </div>
            )
    }
    ,
    {
        id: 15,
        message:
            (
                <div className={"ResponseContainer"}>
                    <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                    <h4 className={"Response Bot"}><em>"Where can I find my account balance and my trading
                        history?"</em>
                    </h4>
                    <p className={"Response Bot"}>
                        You can find your account balance and trading history in the MetaTrader platform. The account
                        balance can also be seen in your <a title="Client Area"
                                                            href="https://secure.tickmill.eu/users/login"
                                                            target="_blank">Client Area</a>.
                    </p>
                </div>
            )
    }
    ,
    {
        id: 16,
        message:
            (
                <div className={"ResponseContainer"}>
                    <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                    <h4 className={"Response Bot"}><em>"Will my funds be protected at Tickmill?"</em>
                    </h4>
                    <p className={"Response Bot"}>
                        As a member of the Investors Compensation Fund (ICF) in Cyprus, all retail clients of Tickmill
                        Europe Ltd are covered in the event of default by Tickmill Europe Ltd. Eligible clients are
                        covered
                        with an amount either equal to twenty thousand Euros (EUR 20,000), or 90% of the covered
                        investor’s
                        claim, whichever is lower (per client).
                    </p>
                </div>
            )
    },
    {
        id: 17,
        message: (
            <div className={"ResponseContainer"}>
                <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                <h4 className={"Response Bot"}><em>"Can I transfer my money from trading account if I have an open
                    position(s)?"</em>
                </h4>
                <p className={"Response Bot"}>
                    Yes, you can. However, at the moment of transfer from trading account to Wallet, your free margin
                    must exceed the requested amount. Free margin is calculated as equity minus the necessary margin
                    (which is required to maintain an open position).
                </p>
                <p className={"Response Bot"}>
                    If you do not have sufficient free margin
                    on your trading account, a transfer from trading account to Wallet will not be executed until you
                    submit the correct amount of transfer and/or close the open positions on your account.
                    <br/><br/>
                    Withdrawal from a Tickmill Wallet can be requested any time.
                </p>
            </div>
        )
    },
    {
        id: 18,
        message: (
            <div className={"ResponseContainer"}>
                <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                <h4 className={"Response Bot"}><em>"Can I withdraw via a different payment method from the one I used to
                    deposit?"</em>
                </h4>
                <p className={"Response Bot"}>
                    Tickmill’s policy is to process withdrawals <strong>via the same method that you used to
                    deposit</strong>. For
                    example, if you deposited using a credit card, the card will be credited with the amount equal to
                    the deposit amount. Upon request, we can send any profits via other payment methods under your name.
                </p>
            </div>
        )
    },
    {
        id: 19,
        message: (
            <div className={"ResponseContainer"}>
                <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                <h4 className={"Response Bot"}><em>"Do you have any charges on deposits and withdrawals?"</em>
                </h4>
                <p className={"Response Bot"}>
                    Tickmill has a zero fees policy on deposits and withdrawals.
                </p>
            </div>
        )
    },
    {
        id: 20,
        message: (
            <div className={"ResponseContainer"}>
                <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                <h4 className={"Response Bot"}><em>"How do I deposit funds to my account?"</em>
                </h4>
                <p className={"Response Bot"}>
                    You can make a deposit inside your <a title="Client Area" target="_blank"
                                                          href="https://secure.tickmill.eu/users/login">Client
                    Area</a> using any <a title="Funding Option" target="_blank"
                                          href="https://www.tickmill.eu/conditions/deposit-and-withdrawal">funding
                    option</a> that suits you best. There
                    are no fees on deposits.
                </p>
            </div>
        )
    },
    {
        id: 21,
        message: (
            <div className={"ResponseContainer"}>
                <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                <h4 className={"Response Bot"}><em>"How do I withdraw funds from my account?"</em>
                </h4>
                <p className={"Response Bot"}>
                    <a title="Log In" href="https://secure.tickmill.eu/users/login" target="_blank">Log in</a> to your
                    Client Area and fill in the respective withdrawal form. There are no fees on
                    withdrawals.
                </p>
            </div>
        )
    },
    {
        id: 22,
        message: (
            <div className={"ResponseContainer"}>
                <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                <h4 className={"Response Bot"}><em>"How fast do you process my withdrawals?"</em>
                </h4>
                <p className={"Response Bot"}>
                    We process all withdrawal requests within one working day.
                </p>
            </div>
        )
    },
    {
        id: 23,
        message: (
            <div className={"ResponseContainer"}>
                <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                <h4 className={"Response Bot"}><em>"How long does it take for funds to reach my bank account?"</em>
                </h4>
                <p className={"Response Bot"}>
                    We process all withdrawal requests within one working day. The time necessary for the funds to reach
                    your bank account depends on your bank’s policy. Bank withdrawals can take 3-7 working days to be
                    seen on the client’s account. Credit/debit card withdrawals can take up to 8 working days to be seen
                    on the client’s account.
                </p>
            </div>
        )
    },
    {
        id: 24,
        message: (
            <div className={"ResponseContainer"}>
                <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                <h4 className={"Response Bot"}><em>"Is broker to broker transfer allowed?"</em>
                </h4>
                <p className={"Response Bot"}>
                    We do not support broker to broker transfer, we only offer our standard payment methods.
                </p>
            </div>
        )
    },
    {
        id: 25,
        message: (
            <div className={"ResponseContainer"}>
                <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                <h4 className={"Response Bot"}><em>"What is the minimum deposit?"</em>
                </h4>
                <p className={"Response Bot"}>
                    The minimum deposit for all account types is $100. However, to get a VIP account, you have to reach
                    a balance of minimum $50,000.
                </p>
            </div>
        )
    },
    {
        id: 26,
        message: (
            <div className={"ResponseContainer"}>
                <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                <h4 className={"Response Bot"}><em>"Are the measures permanent?"</em>
                </h4>
                <p className={"Response Bot"}>
                    The product intervention measures have been adopted by the relevant competent authority on a
                    permanent basis.
                </p>
            </div>
        )
    },
    {
        id: 27,
        message: (
            <div className={"ResponseContainer"}>
                <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                <h4 className={"Response Bot"}><em>"Can I have a professional account and a retail account at the same
                    time?"</em>
                </h4>
                <p className={"Response Bot"}>
                    A client can be a Retail or a Professional Client. Tickmill Europe Ltd will not be offering a retail
                    and a professional account at the same time. You will be classified either as a Professional or a
                    Retail Client.
                </p>
            </div>
        )
    },
    {
        id: 28,
        message: (
            <div className={"ResponseContainer"}>
                <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                <h4 className={"Response Bot"}><em>"Do I get negative balance protection as an elective Professional
                    Client?"</em>
                </h4>
                <p className={"Response Bot"}>
                    Yes, professional clients can benefit from negative balance protection.<br/><br/>It is important to
                    note that Tickmill offers Negative Balance Protection to professional clients, which is not the
                    industry standard. We also reserve the right to withdraw this privilege.
                </p>
            </div>
        )
    },
    {
        id: 29,
        message: (
            <div className={"ResponseContainer"}>
                <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                <h4 className={"Response Bot"}><em>"Do the product intervention measures apply to companies as
                    well?"</em>
                </h4>
                <p className={"Response Bot"}>
                    <strong>Yes, they do.</strong> The mesures apply to Retail Clients, whether they are individuals or
                    corporations.
                </p>
            </div>
        )
    },
    {
        id: 30,
        message: (
            <div className={"ResponseContainer"}>
                <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                <h4 className={"Response Bot"}><em>"Do the product intervention measures only apply to clients living in
                    the EU?"</em>
                </h4>
                <p className={"Response Bot"}>
                    The product intervention measures apply to all clients trading with Tickmill Europe Ltd,
                    irrespective of their location.
                </p>
            </div>
        )
    },
    {
        id: 31,
        message: (
            <div className={"ResponseContainer"}>
                <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                <h4 className={"Response Bot"}><em>"Does my professional qualification guarantee I will become a
                    Professional Client?"</em>
                </h4>
                <p className={"Response Bot"}>
                    No. A relevant qualification alone will not guarantee that someone will become a Professional
                    Client. However, it will be looked upon favourably.
                </p>
            </div>
        )
    },
    {
        id: 32,
        message: (
            <div className={"ResponseContainer"}>
                <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                <h4 className={"Response Bot"}><em>"How can I become a Professional Client?"</em>
                </h4>
                <p className={"Response Bot"}>
                    A client who wishes to be reclassified must meet the minimum criteria to be eligible to become an
                    elective Professional Client.
                </p>
                <p className={"Response Bot"}>
                    Clients who wish to do so must complete the relevant application form inside the <a
                    title="Client Area" href="https://secure.tickmill.eu/users/login">Client Area</a>.
                </p>
                <p className={"Response Bot"}>
                    Before completing the application, clients should read the information available in the <a
                    title="Client Area" href="https://secure.tickmill.eu/users/login">Client Area</a> regarding
                    protections that Elective Professionals lose in comparison to Retail Clients.
                </p>
            </div>
        )
    },
    {
        id: 33,
        message:
            (
                <div className={"ResponseContainer"}>
                    <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                    <h4 className={"Response Bot"}><em>"Once I become a Professional Client, can I revert to Retail
                        Client status if I wish?"</em></h4>
                    <p className={"Response Bot"}><strong>Yes</strong> – Clients have the right to be reclassified at
                        any time. Please <a title="Email" href="mailto:compliance@tickmill.eu">email</a> our Compliance
                        department.
                    </p>
                </div>
            )
    },
    {
        id: 34,
        message: (
            <div className={"ResponseContainer"}>
                <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                <h4 className={"Response Bot"}><em>"What are the minimum requirements to become a Professional
                    Client?"</em>
                </h4>
                <p className={"Response Bot"}>
                    A Professional Client must possess the relevant experience, knowledge and expertise to be able to
                    make their own investment decisions and properly assess the risks involved.<br/><br/>Please
                    refer to the criteria set out above, under ’Elective Professional Client’.
                </p>
            </div>
        )
    },
    {
        id: 35,
        message: (
            <div className={"ResponseContainer"}>
                <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                <h4 className={"Response Bot"}><em>"What are the practical implications of becoming a Professional
                    Client?"</em>
                </h4>
                <p className={"Response Bot"}>
                    As a Professional Client, you will not have the following protections afforded to Retail Clients
                    under CySEC:
                    <br/><br/>
                    <ul>
                        <li>FOS – If you are an elective Professional Client who is not defined as a ‘consumer’, you
                            will not have access to the Financial Ombudsman Service (FOS).
                        </li>
                        <li>No leverage restrictions – You might be exposed to higher leverages that can amplify your
                            losses.
                        </li>
                        <li>Investors Compensation Fund (ICF) – Professional Clients under Tickmill Europe Ltd (CySEC
                            regulated) are not entitled to a compensation by the ICF. These are listed in the Loss of
                            Protection section in the Client Area that you need to read and accept before your
                            application
                            is submitted.
                            <br/><br/>
                            <a title="Https://secure.tickmill.eu/users/login"
                               href="https://secure.tickmill.eu/users/login">https://secure.tickmill.eu/users/login</a>
                        </li>
                    </ul>
                </p>
            </div>
        )
    },
    {
        id: 36,
        message: (
            <div className={"ResponseContainer"}>
                <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                <h4 className={"Response Bot"}><em>"What are the product intervention measures?"</em>
                </h4>
                <p className={"Response Bot"}>
                    The product intervention measures stipulated by the relevant competent authority restrict the
                    marketing, distribution or sale of CFDs to retail investors, by providing the following protections:
                </p>
                <p className={"Response Bot"}>
                    <ul>
                        <li>Leverage limits on the opening of a position between 1:30 and 1:2, which vary according to
                            the volatility of the underlying asset:
                            <ul>
                                <li>1:30 for major currency pairs;</li>
                                <li>1:20 for non-major currency pairs, gold, and major equity indices;</li>
                                <li>1:10 for commodities other than gold and non-major equity indices;</li>
                                <li>1:5 for individual equities and any underlying not otherwise mentioned;</li>
                            </ul>
                        </li>
                        <li>A margin close-out rule on a per account basis;</li>
                        <li>A negative balance protection on a per account basis;</li>
                        <li>A prohibition on benefits and incentivizing trading;</li>
                        <li>A standardized risk warning.</li>
                    </ul>
                </p>
            </div>
        )
    },
    {
        id: 37,
        message: (
            <div className={"ResponseContainer"}>
                <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                <h4 className={"Response Bot"}><em>"What can I do if I fail to meet the minimum criteria to reclassify
                    as a Professional Client?"</em>
                </h4>
                <p className={"Response Bot"}>
                    Our Retail Clients will enjoy the maximum protection available under CySEC rules. If you do not meet
                    the minimum requirements, then you will continue to be classified as a Retail Client. Kindly note
                    that you should NOT provide false information in order to qualify as a Professional Client.
                </p>
            </div>
        )
    },
    {
        id: 38,
        message: (
            <div className={"ResponseContainer"}>
                <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                <h4 className={"Response Bot"}><em>"What can I use in my investment portfolio?"</em>
                </h4>
                <p className={"Response Bot"}>
                    You can use bank statements, share certificates and SIPS (provided it is not a company pension).
                    This list is not exhaustive.
                </p>
                <p className={"Response Bot"}>
                    We will <strong>NOT</strong> accept company pensions, physical commodities and
                    fixed assets (including properties and vehicles).
                </p>
            </div>
        )
    },
    {
        id: 39,
        message: (
            <div className={"ResponseContainer"}>
                <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                <h4 className={"Response Bot"}><em>"What criteria do I need to meet to become a Professional
                    Client?"</em>
                </h4>
                <p className={"Response Bot"}>
                    Clients reclassifying as Elective Professionals are required to satisfy
                    a <strong>2/3</strong> criterion:
                </p>
                <p className={"Response Bot"}>
                    <ul>
                        <li>An Investment Portfolio size equal to or greater than €500,000.00;</li>
                        <li>Significant trading experience;</li>
                        <li>And professional experience in the financial services industry with leveraged products, for
                            one year or more.
                        </li>
                    </ul>
                </p>
            </div>
        )
    },
    {
        id: 40,
        message: (
            <div className={"ResponseContainer"}>
                <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                <h4 className={"Response Bot"}><em>"What does a leverage limit imply?</em>
                </h4>
                <p className={"Response Bot"}>
                    The leverage limits imposed on CFDs set the maximum leverage that providers can offer you opening a
                    CFD position.
                </p>
                <p className={"Response Bot"}>
                    In order to comply with the ESMA Product Intervention measures, Tickmill has
                    reduced the maximum leverage of Retail Clients from 1:300 to 1:30. So, whereas the requirement on a
                    100,000 EUR position would previously require a deposit of just 300 EUR, this has been increased to
                    3,000 EUR for Retail Clients.
                </p>
                <p className={"Response Bot"}>
                    With lower leverage limits investors are protected from
                    certain risks.
                </p>
            </div>
        )
    },
    {
        id: 41,
        message:
            (
                <div className={"ResponseContainer"}>
                    <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                    <h4 className={"Response Bot"}><em>"What evidence will a client be asked to submit to reclassify as
                        a
                        Professional Client?"</em>
                    </h4>
                    <p className={"Response Bot"}>
                        <ul>
                            <li>Evidence of trading activity showing approximately <strong>40 trades of a significant
                                size</strong> during
                                the past year.
                            </li>
                            <li>Any documentation that shows that the client has <strong>worked in the industry in the
                                relevant
                                financial sector for over a year</strong> in a professional position <strong>requiring
                                knowledge of the
                                transactions or services envisaged.</strong>
                            </li>
                            <li>Bank statements, share certificates, broker accounts, etc. that evidence <strong>500,000
                                EUR
                                or more
                                in investments.</strong>
                            </li>
                        </ul>
                    </p>
                </div>
            )
    },
    {
        id: 42,
        message: (
            <div className={"ResponseContainer"}>
                <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                <h4 className={"Response Bot"}><em>"What is ESMA?"</em>
                </h4>
                <p className={"Response Bot"}>
                    ESMA is an independent EU Authority that contributes to safeguarding the stability of the European
                    Union’s financial system by enhancing the protection of investors and promoting stable and orderly
                    financial markets.
                </p>
            </div>
        )
    },
    {
        id: 43,
        message: (
            <div className={"ResponseContainer"}>
                <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                <h4 className={"Response Bot"}><em>"What is negative balance protection?"</em>
                </h4>
                <p className={"Response Bot"}>
                    <ul>
                        <li>The negative balance protection limits the maximum losses that a retail investor could have.
                            It is designed as a backstop for cases when margin close-out does not work effectively as a
                            result of a very sudden price movement.
                        </li>
                        <li>By introducing negative balance protection per account, the investor can never lose more
                            than the total sum invested for trading CFDs. There can be no residual loss or obligation to
                            provide additional funds beyond those in the investor’s CFD trading account.
                        </li>
                    </ul>
                </p>
            </div>
        )
    },
    {
        id: 44,
        message: (
            <div className={"ResponseContainer"}>
                <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                <h4 className={"Response Bot"}><em>"What is the new margin close-out rule and what are the practical
                    implications of it?"</em>
                </h4>
                <p className={"Response Bot"}>
                    <ul>
                        <li>The margin close-out rule standardises the percentage of margin at which CFD providers are
                            required to close out a CFD or multiple CFD positions.
                        </li>
                        <li>The margin close-out has been set at 50% to ensure that investors’ margin is not eroded
                            close to zero.
                        </li>
                        <li>Specifically, if the total margin in an account falls more than 50% of the amount of the
                            initial margin required in respect of the open CFD position, the provider must close one or
                            more of the CFD positions.
                        </li>
                        <li>The margin close-out rule does not prescribe which positions must be closed out or in what
                            order.
                        </li>
                    </ul>
                </p>
            </div>
        )
    },
    {
        id: 45,
        message: (
            <div className={"ResponseContainer"}>
                <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                <h4 className={"Response Bot"}><em>"What level of professional experience do I need to have to qualify
                    as a Professional Client?"</em>
                </h4>
                <p className={"Response Bot"}>
                    The minimum professional experience requirement is to have worked in an industry and a role that
                    required a good understanding of CFDs and the foreign exchange market for at least one year.
                </p>
            </div>
        )
    },
    {
        id: 46,
        message: (
            <div className={"ResponseContainer"}>
                <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                <h4 className={"Response Bot"}><em>"Who can be a Professional Client?"</em>
                </h4>
                <p className={"Response Bot"}>
                    A Professional Client can be either ’by default’ or ’elective’:
                </p>
                <p className={"Response Bot"}>
                    <h3><u>By Default Professional Client:</u></h3>
                    <br/>
                    <ul>
                        <li>A client required to be authorised or regulated to operate in the financial markets,
                            including but not limited to credit institutions, investment firms and insurance companies
                        </li>
                        <li>A large undertaking meeting of two of the following size requirements on a company basis:
                        </li>
                    </ul>
                    <br/>
                    <ol>
                        <li>A <strong>balance sheet</strong> total of <strong>20,000,000 EUR</strong> or more;</li>
                        <li>A <strong>net turnover</strong> of <strong>40,000,000 EUR</strong> or more;</li>
                        <li><strong>Own funds</strong> of <strong>2,000,000 EUR</strong> or more;</li>
                    </ol>
                    <br/>
                    <ul>
                        <li>A national or regional government, including a public body that manages public debt, central
                            banks, international or supranational institutions.
                        </li>
                        <li>An institutional investor whose main activity is to invest in financial instruments.</li>
                        <li>A large undertaking, including a partnership, a body corporate or an unincorporated
                            association, which meet the relevant criteria.
                        </li>
                    </ul>
                </p>
                <p className={"Response Bot"}>
                    <h3><u>Elective Professional Client:</u></h3>
                    <br/>
                    <ul>
                        <li>A client must meet the requirements set by CySEC:</li>
                        <li>A client must pass a <em>"Qualitative test”</em>, where we must assess their knowledge,
                            experience and expertise with reference to the nature of the transactions or services
                            envisaged, to ensure that they are capable of making their own investment decisions:
                        </li>
                        <li>A client must also complete a <em>"Quantitative test”</em> and <strong>satisfy 2 of the
                            following criteria</strong>, where applicable:
                        </li>
                    </ul>
                    <br/>
                    <ol>
                        <li>The client has carried out <strong>transactions in significant
                            size</strong> and <strong>averaged</strong> a frequency of <strong>over 10 trades per
                            quarter on the relevant market over the previous 4 quarters</strong>;
                        </li>
                        <li>The client has an <strong>investment portfolio</strong> and <strong>cash
                            investments</strong> of <strong>over 500,000 EUR</strong> in value;
                        </li>
                        <li>The client is <strong>employed or had been employed in the financial sector for over a
                            year</strong> in a professional position that requires <strong>knowledge of the transactions
                            or services envisaged.</strong></li>
                    </ol>
                </p>
            </div>
        )
    },
    {
        id: 47,
        message:
            (
                <div className={"ResponseContainer"}>
                    <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                    <h4 className={"Response Bot"}><em>"Will my funds still be protected if I become a Professional
                        Client?"</em>
                    </h4>
                    <p className={"Response Bot"}>
                        If you choose to become an elective Professional Client, your funds will continue to be held in
                        segregated accounts but will not be covered by the Investor Compensation Fund (ICF).
                    </p>
                </div>
            )
    },
    {
        id: 48,
        message: (
            <div className={"ResponseContainer"}>
                <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                <h4 className={"Response Bot"}><em>"Are hedging and scalping allowed?"</em>
                </h4>
                <p className={"Response Bot"}>
                    Hedging is allowed. The required margin for hedging positions on <a title="Classic"
                                                                                        href="https://www.tickmill.eu/trading/classic-account">Classic</a>,
                    and Raw accounts is 0. Scalping is also allowed. There are no time limitations for keeping the
                    positions open.
                </p>
            </div>
        )
    },
    {
        id: 49,
        message: (
            <div className={"ResponseContainer"}>
                <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                <h4 className={"Response Bot"}><em>"Do I get any requotes?"</em>
                </h4>
                <p className={"Response Bot"}>
                    Tickmill is one of the few brokers that doesn’t have any requotes.
                </p>
            </div>
        )
    },
    {
        id: 50,
        message: (
            <div className={"ResponseContainer"}>
                <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                <h4 className={"Response Bot"}><em>"Do you offer FIX API connection?"</em>
                </h4>
                <p className={"Response Bot"}>
                    We offer FIX API connection to our <strong>large private clients</strong> and <strong>institutional
                    clients.</strong>
                    <br/><br/>
                    <ul>
                        <li>The minimum account balance required is 500,000 £$€
                        </li>
                        <li>Required minimum monthly commission fee generated should be 5,000 £$€
                        </li>
                    </ul>
                    <br/>
                    We are not offering a demo version.
                </p>
                <p className={"Response Bot"}>
                    If a client generates 5,000 £$€ or more in
                    monthly commissions, then we do not charge any fees for using this service. However, if the monthly
                    commissions are less than 5,000 £$€, then a fee applies (5,000 £$€ – amount of commission
                    generated).
                </p>
            </div>
        )
    },
    {
        id: 51,
        message: (
            <div className={"ResponseContainer"}>
                <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                <h4 className={"Response Bot"}><em>"Do you offer MetaTrader MultiTerminal?"</em>
                </h4>
                <p className={"Response Bot"}>
                    We do not offer MetaTrader MultiTerminal.
                </p>
                <p className={"Response Bot"}>
                    If you wish, you can install multiple MetaTrader
                    platforms and place them in different folders. You can download the <a title="Mt4 Platform"
                                                                                           href="https://www.tickmill.eu/trading-platforms/mt4"
                                                                                           target="_blank">MT4
                    platform</a> and the <a title="Mt5 Platform" href="https://www.tickmill.eu/trading-platforms/mt5"
                                            target="_blank">MT5 platform</a> from our website.
                </p>
                <p className={"Response Bot"}>
                    If you click
                    ‘NEXT’ on the first screen, it will then install MT4 or MT5 to the default folder without asking. On
                    the first screen, you will see the options ‘NEXT’, ‘CANCEL’ and ‘SETTINGS’. You need to click on
                    ‘SETTINGS’ to change the default folder. Then, the system will give you the option to change the
                    default install patch.
                </p>
            </div>
        )
    },
    {
        id: 52,
        message:
            (
                <div className={"ResponseContainer"}>
                    <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                    <h4 className={"Response Bot"}><em>"Do you offer negative balance protection/cover negative
                        balance?"</em>
                    </h4>
                    <p className={"Response Bot"}>
                        Traders who use the maximum leverage available face the risk of a negative balance.
                    </p>
                    <p className={"Response Bot"}>
                        <strong>For example:</strong> Let’s assume that you have 200 USD on your account and you open 1
                        lot on USDJPY on
                        Friday
                        evening, with 1:30 leverage and 200 USD margin.
                        <br/><br/>On Sunday night, the market opens 30 pips away from Friday’s closing price in a
                        direction against you, so your position will immediately have a loss of 30 pips x 10 USD = 300
                        USD loss, while you have only 200 USD on your
                        account.
                        <br/><br/>The position will be automatically closed and your account would have a negative
                        balance of -100 USD. This situation is 100% impossible when a trader uses 1:1 leverage. The
                        higher leverage a trader uses, the more risks they take. Please also note that a negative
                        balance may occur due to a slippage during high volatility.
                    </p>
                    <p className={"Response Bot"}>
                        Our Risk department is constantly monitoring our clients’ risk-taking and if we see that a
                        client trades irresponsibly, then we will notify the client via e-mail and ask them to reduce
                        risk exposure. Also, we might reduce the leverage on the client’s
                        account.
                        <br/><br/>As a CySEC regulated broker, we cover the negative balance of our clients.
                    </p>
                </div>
            )
    },
    {
        id: 53,
        message:
            (
                <div className={"ResponseContainer"}>
                    <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                    <h4 className={"Response Bot"}><em>"Do you offer Swap-Free accounts?"</em>
                    </h4>
                    <p className={"Response Bot"}>
                        Yes, we offer Muslim traders all our accounts with a <a title="Swap-free Option"
                                                                                href="https://www.tickmill.eu/trading/islamic-account">swap-free
                        option</a>.
                    </p>
                </div>
            )
    },
    {
        id: 54,
        message: (
            <div className={"ResponseContainer"}>
                <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                <h4 className={"Response Bot"}><em>"Do you provide tick data?"</em>
                </h4>
                <p className={"Response Bot"}>
                    Currently, we do not provide tick data, as MetaTrader platforms are not able to store all ticks.
                    Therefore, the tick data would not be accurate. There is an option for the server to store tick
                    data, but we do not use it, as it is not able to store 100% of the ticks. In addition, that would
                    slow down the server considerably due to a large amount of data, as the ticks are not filtered.
                </p>
            </div>
        )
    },
    {
        id: 55,
        message: (
            <div className={"ResponseContainer"}>
                <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                <h4 className={"Response Bot"}><em>"Does slippage occur in your platform?"</em>
                </h4>
                <p className={"Response Bot"}>
                    At Tickmill, slippage can occur during big news announcements, depending on the market conditions
                    and volatility. There could be both positive and negative slippage.
                </p>
            </div>
        )
    },
    {
        id: 56,
        message: (
            <div className={"ResponseContainer"}>
                <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                <h4 className={"Response Bot"}><em>"Does Tickmill offer Cash or Future CFDs?"</em>
                </h4>
                <p className={"Response Bot"}>
                    We do offer Cash CFDs that allow you to trade with a continuous price that isn’t subject to an
                    expiration date. The Cash CFD price is derived from the underlying futures contracts.
                </p>
            </div>
        )
    },
    {
        id: 57,
        message: (
            <div className={"ResponseContainer"}>
                <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                <h4 className={"Response Bot"}><em>"How can I find/check historical data?"</em>
                </h4>
                <p className={"Response Bot"}>
                    You can download historical data from the MetaTrader trading platform, by clicking on:
                </p>
                <p className={"Response Bot"}>
                    Tools
                    > History Centre – then choose a trading instrument and finally press the ‘Download’
                    button.
                </p>
                <p className={"Response Bot"}>
                    History will then be available on your trading platform, so you can click
                    on:
                </p>
                <p className={"Response Bot"}>
                    File > Open offline > Open Offline Chart.
                </p>
                <p className={"Response Bot"}>
                    Please note that the longer the time
                    frame, the longer the available history will be. For example, M5 history is available for 1.5 weeks,
                    M15 history for 1 month, etc.
                </p>
            </div>
        )
    },
    {
        id: 58,
        message:
            (
                <div className={"ResponseContainer"}>
                    <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                    <h4 className={"Response Bot"}><em>"How many platforms are available for trading?"</em>
                    </h4>
                    <p className={"Response Bot"}>
                        We offer some of the most popular and easy-to-use platforms, the MetaTrader 4 and the MetaTrader
                        5,
                        which are available for Windows, OS X, iOS and Android. At Tickmill, you can also trade
                        instantly
                        with our Web Trader that requires no installation whatsoever.
                    </p>
                </div>
            )
    },
    {
        id: 59,
        message: (
            <div className={"ResponseContainer"}>
                <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                <h4 className={"Response Bot"}><em>"VWAP Execution explained"</em>
                </h4>
                <p className={"Response Bot"}>
                    The VWAP or Volume Weighted Average Price is the average price at which your order is executed,
                    where each trade price is weighted by the fraction of the volume associated with the
                    trade.
                    <br/><br/>For instance, when a trader places a large position, it may be filled at different
                    prices as per the current market liquidity. VWAP summarizes all trades that occurred from the start
                    of the order until the order was completed.
                </p>
                <p className={"Response Bot"}>
                    If you decide to buy 6 Million EURUSD at
                    market, the order will be filled through the top 3 price levels of the trading book:
                    <br/><br/>
                    <table>
                        <tbody>
                        <tr>
                            <td><p><strong>BID Volume</strong></p></td>
                            <td><p><strong>BID Quotes</strong></p></td>
                            <td><p><strong>Spread</strong></p></td>
                            <td><p><strong>ASK Quotes</strong></p></td>
                            <td><p><strong>ASK Volume</strong></p></td>
                        </tr>
                        <tr>
                            <td><p>1,000,000
                            </p></td>
                            <td><p>1.2020<strong>4</strong></p></td>
                            <td><p>0.1 pip
                            </p></td>
                            <td><p>1.2020<strong>5</strong></p></td>
                            <td><p>1,500,000
                            </p></td>
                        </tr>
                        <tr>
                            <td><p>5,000,000
                            </p></td>
                            <td><p>1.2020<strong>3</strong></p></td>
                            <td><p>0.3 pip
                            </p></td>
                            <td><p>1.2020<strong>6</strong></p></td>
                            <td><p>2,000,000
                            </p></td>
                        </tr>
                        <tr>
                            <td><p>600,000
                            </p></td>
                            <td><p>1.2020<strong>2</strong></p></td>
                            <td><p>0.5 pip
                            </p></td>
                            <td><p>1.2020<strong>7</strong></p></td>
                            <td><p>3,200,000
                            </p></td>
                        </tr>
                        <tr>
                            <td><p>2,200,000
                            </p></td>
                            <td><p>1.2020<strong>2</strong></p></td>
                            <td><p>0.6 pip
                            </p></td>
                            <td><p>1.2020<strong>8</strong></p></td>
                            <td><p>3,500,000
                            </p></td>
                        </tr>
                        </tbody>
                    </table>
                    <br/><strong>Note:</strong> quotes and volumes in this table are only for illustrative purposes and
                    they will depend on the current market liquidity
                </p>
                <p className={"Response Bot"}>
                    In detail,
                    <br/><br/>
                    <ul>
                        <li>Buy 1,5 million at 1.2020<strong>5</strong> (cumulative volume = 1,5 million; remaining to
                            fill = 4,5 million)
                        </li>
                        <li>Buy 2 million at 1.2020<strong>6</strong> (cumulative volume = 3,5 million; remaining to
                            fill = 2,5 million)
                        </li>
                        <li>Buy 2,5 million at 1.2020<strong>7</strong> (cumulative volume = 6 million; remaining to
                            fill = 0)
                        </li>
                    </ul>
                    <br/>In summary, your VWAP or Volume Weighted Average Price, will be calculated using the
                    following formula:
                    <br/><br/>VWAP = (1,500,000/6,000,000) x 1.20205 + (2,000,000/6,000,000) x
                    1.20206 + (2,500,000/6,000,000) x 1.20207
                    <br/><br/>VWAP = 1.202062
                </p>

            </div>
        )
    },
    {
        id: 60,
        message:
            (
                <div className={"ResponseContainer"}>
                    <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                    <h4 className={"Response Bot"}><em>"What are the advantages of trading with Tickmill?"</em>
                    </h4>
                    <p className={"Response Bot"}>
                        <ul>
                            <li>Low spreads starting from 0.0 pips.</li>
                            <li>Ultra-fast execution speed of 0.15 seconds on average.</li>
                            <li>Instant processing for Skrill, Neteller, and credit card deposits. Withdrawals
                                processed within one working day.
                            </li>
                            <li>No restrictions on trading.</li>
                            <li>No requotes.</li>
                            <li>Allowance for scalping, hedging, arbitrage, EAs, and algorithms.</li>
                        </ul>
                    </p>

                </div>
            )
    },
    {
        id: 61,
        message: (
            <div className={"ResponseContainer"}>
                <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                <h4 className={"Response Bot"}><em>"What are the limits of setting SL, TP, and TS?"</em>
                </h4>
                <p className={"Response Bot"}>
                    <ul>
                        <li>Set Stop Loss and Take Profit orders with no limits on all account types.</li>
                        <li>SL and TP orders remain active even if your computer is switched off.</li>
                        <li>The minimum Trailing Stop level is 1.5 pips or 15 points.</li>
                        <li>Only 1 trailing stop per order is allowed.</li>
                        <li>The MetaTrader platform must remain open to keep the trailing stop active.</li>
                    </ul>
                </p>
            </div>
        )
    },
    {
        id: 62,
        message: (
            <div className={"ResponseContainer"}>
                <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                <h4 className={"Response Bot"}><em>"What are the minimum and maximum account leverage you offer?"</em>
                </h4>
                <p className={"Response Bot"}>
                    <h3>For Retail Clients:</h3>
                    The minimum leverage is 1:1. The maximum and default leverage is 1:30.
                    <br/><br/>
                    <ul>
                        <li>1:30 on Major FX Pairs</li>
                        <li>1:20 on Major Stock Indices, Non-Major Currencies and Gold</li>
                        <li>1:10 on Silver, Oil and Non-Major Indices</li>
                        <li>1:5 on Bonds</li>
                    </ul>
                </p>
                <p className={"Response Bot"}>
                    <h3>For Professional Clients:</h3>
                    The minimum leverage is 1:1. The maximum and default leverage is 1:300.
                    <br/><br/>Leverage for Metals: The leverage for gold is equal to the account leverage, while the
                    leverage for silver is 4
                    times lower than the account leverage. If the trading account has a leverage of 1:300, then the
                    leverage for gold will be 1:300 and the leverage for silver will be 1:75.
                </p>
                <p className={"Response Bot"}>
                    For more information about our leverage and margin requirements, click <a title="Here"
                                                                                              href="https://www.tickmill.eu/conditions/leverage-margin">here</a>.
                </p>
            </div>
        )
    },
    {
        id: 63,
        message:
            (
                <div className={"ResponseContainer"}>
                    <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                    <h4 className={"Response Bot"}><em>"What are the minimum and maximum position sizes?"</em>
                    </h4>
                    <p className={"Response Bot"}>
                        The minimum trade size is 0.01 lot and the maximum trade size is 100 lots. The maximum amount of
                        orders you can open on a MetaTrader account is 200.
                    </p>
                </div>
            )
    },
    {
        id: 64,
        message: (
            <div className={"ResponseContainer"}>
                <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                <h4 className={"Response Bot"}><em>"What are your margin call/stop out levels?"</em>
                </h4>
                <p className={"Response Bot"}>
                    Our margin call / stop out levels are different depending on whether you are a Retail or a
                    Professional client:<br/><br/>
                    <table>
                        <tbody>
                        <tr>
                            <td><strong>Client Classification</strong></td>
                            <td><strong>Margin Call / Stop Out</strong></td>
                        </tr>
                        <tr>
                            <td>
                                Retail Client
                            </td>
                            <td>
                                100% / 50%
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Professional Client
                            </td>
                            <td>
                                100% / 30%
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <br/>
                    Your account may be subject to a margin call if your account equity falls to a level that is equal
                    to the margin of your existing positions. For example, you have an open position of 1 lot on EURUSD.
                    The margin to hold that position is 3,333.33 EUR for Retail Clients.*
                </p>
                <p className={"Response Bot"}>
                    <h3>Consider this scenario:</h3>
                    <ul>
                        <li>You initially had a 6,000 EUR equity in your account.</li>
                        <li>When the position starts to move against you and your account equity falls to 3,333.33 EUR,
                            you will have a margin call. But your position will not be closed yet.
                        </li>
                        <li>When your account equity falls to 50% of the required margin, then the system starts to
                            close your positions immediately.
                        </li>
                    </ul>
                    <br/>
                    Taking the above example, if you open a position with 3,333.33 EUR of margin and your account equity
                    falls to 1,666.66 EUR, then the system starts to close your position. If you have several positions
                    opened, then the system closes them starting from the one with the biggest loss.
                    <br/><br/>
                    If, while closing the positions, your account equity reaches a level of more than 50% of the
                    required margin, all other positions will remain open.
                    <br/><br/>
                    *This is an illustrative example.
                </p>
            </div>
        )
    },
    {
        id: 65,
        message: (
            <div className={"ResponseContainer"}>
                <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                <h4 className={"Response Bot"}><em>"What are your spreads?"</em>
                </h4>
                <p className={"Response Bot"}>
                    <h3>We offer floating spreads for all account types:</h3>
                    <ul>
                        <li>
                            <a title="Classic"
                               href="https://www.tickmill.eu/trading/classic-account"
                               target="_blank">Classic</a>
                            <ul>
                                <li>Variable spreads starting from 1.6 pips.</li>
                                <li>No commissions.</li>
                            </ul>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a title="Pro"
                               href="https://www.tickmill.eu/trading/pro-account"
                               target="_blank">Pro</a>
                            <ul>
                                <li>Variable spreads starting from 0.0 pips.</li>
                                <li>Low commissions apply.</li>
                            </ul>
                        </li>
                    </ul>
                    <br/>
                    You can check out our spreads by clicking <a title="Here"
                                                                 href="https://www.tickmill.eu/conditions/spreads-swaps">here</a>.
                </p>
                <p className={"Response Bot"}>At market opening and closing times and prior to announcements, the market
                    spreads may widen substantially. Consequently, you must ensure that you have sufficient funds on
                    your account to cover this eventuality.
                </p>
            </div>
        )
    },
    {
        id: 66,
        message: (
            <div className={"ResponseContainer"}>
                <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                <h4 className={"Response Bot"}><em>"What are your trading hours?"</em>
                </h4>
                <p className={"Response Bot"}>
                    <h3>FX Trading:</h3>
                    <ul>
                        <li>Available 24 hours a day, 5 days a week.</li>
                        <li>Monday: 00:02 - 24:00</li>
                        <li>Tuesday to Thursday: 00:00 - 24:00</li>
                        <li>Friday: 00:00 - 23:58 (MT4 Server time).</li>
                        <li><a title="Find out more here" href="https://www.tickmill.com/instruments/forex"
                               target="_blank">Find out more here</a>
                        </li>
                    </ul>
                </p>
                <p className={"Response Bot"}>
                    <h3>CFDs Trading Hours:</h3>
                    <ul>
                        <li>Precious Metals: Specific trading hours <a title="Here"
                                                                       href="https://www.tickmill.com/instruments/precious-metals"
                                                                       target="_blank">here</a></li>
                        <li>Stock Indices and Oil: Specific trading hours <a title="Here"
                                                                             href="https://www.tickmill.com/instruments/stock-indices"
                                                                             target="_blank">here</a></li>
                        <li>Bonds: Specific trading hours <a title="Here"
                                                             href="https://www.tickmill.com/instruments/bonds"
                                                             target="_blank">here</a></li>
                        <li>Stocks: Specific trading hours <a title="Here" href="/instruments/stocks"
                                                              target="_blank">here</a></li>
                    </ul>
                </p>
                <p className={"Response Bot"}>
                    <strong>Cryptocurrency trading</strong> is available from Monday 00:00 to Sunday 24:00 (MT4/MT5
                    Server time).
                </p>
                <p className={"Response Bot"}>
                    The server time is set to GMT+2 and GMT+3 during DST in the US and Europe.
                    <br/><br/>
                    Trading hours can be also viewed in your MT4 or MT5 terminal (Market Watch > Right click on the
                    symbol > Specification).
                    <br/><br/>
                    <strong>Note:</strong> Trading hours are subject to change without prior
                    notice. Liquidity Providers may adjust trading schedule as necessary, depending on market
                    conditions.
                </p>
            </div>
        )
    },
    {
        id: 67,
        message:
            (
                <div className={"ResponseContainer"}>
                    <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                    <h4 className={"Response Bot"}><em>"What commission will I be charged for trading on the MetaTrader
                        platform?"</em>
                    </h4>
                    <p className={"Response Bot"}>
                        <ul>
                            <li>
                                <strong><a title="Classic"
                                           href="https://www.tickmill.eu/trading/classic-account"
                                           target="_blank">Classic Account:</a></strong>
                                <ul>
                                    <li>No commissions.</li>
                                </ul>
                            </li>
                            <li>
                                <strong><a title="Pro"
                                           href="https://www.tickmill.eu/trading/pro-account"
                                           target="_blank">Pro Account:</a></strong>
                                <ul>
                                    <li>Commission: 2 units of the base currency per side per lot.</li>
                                </ul>
                            </li>
                            <li>
                                <strong><a title="Vip"
                                           href="https://www.tickmill.eu/trading/vip-account">VIP Account:</a></strong>
                                <ul>
                                    <li>Commission: 1 unit of the base currency per side per lot.</li>
                                </ul>
                            </li>
                        </ul>
                    </p>
                </div>
            )
    },
    {
        id: 68,
        message: (
            <div className={"ResponseContainer"}>
                <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                <h4 className={"Response Bot"}><em>"What is slippage?"</em>
                </h4>
                <p className={"Response Bot"}>
                    Slippage often occurs during periods of higher volatility (for example due to news events), making
                    an Order at a specific price impossible to execute, when market orders are used, and also when large
                    Orders are executed when there may not be enough interest at the desired price level to maintain the
                    expected price of trade.
                    <br/><br/>
                    All trades are executed at the first available market price. As market
                    prices are moving constantly, then it is often the case that clients get either positive or negative
                    slippage.
                </p>
            </div>
        )
    },
    {
        id: 69,
        message: (
            <div className={"ResponseContainer"}>
                <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                <h4 className={"Response Bot"}><em>"What is the commission on the Pro account?"</em>
                </h4>
                <p className={"Response Bot"}>
                    The <a title="Pro Account" href="https://www.tickmill.eu/trading/pro-account">Pro account</a> has a
                    commission of 2 currency units per side per lot (0.0020% notional) in the base currency of the
                    trading instrument.
                </p>
                <p className={"Response Bot"}>
                    <h3>Example Scenarios:</h3>
                    <ul>
                        <li>For 1 lot on EURUSD (1 lot = 100,000 EUR):
                            <ul>
                                <li>Commission: 2 EUR per side, 4 EUR per round turn.</li>
                            </ul>
                        </li>
                        <li>For 1 lot on GBPUSD:
                            <ul>
                                <li>Commission: 2 GBP per side, 4 GBP per round turn.</li>
                            </ul>
                        </li>
                        <li>For 1 lot on AUDUSD:
                            <ul>
                                <li>Commission: 2 AUD per side, 4 AUD per round turn.</li>
                            </ul>
                        </li>
                    </ul>
                    <br/>
                    <strong>Note:</strong> If you have a USD account, then 4 EUR, 4 GBP
                    and 4 AUD will be automatically converted to USD.
                </p>
            </div>
        )
    },
    {
        id: 70,
        message: (
            <div className={"ResponseContainer"}>
                <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                <h4 className={"Response Bot"}><em>"What is the commission on the VIP account?"</em>
                </h4>
                <p className={"Response Bot"}>
                    On the <a title="Vip Account" href="https://www.tickmill.eu/trading/vip-account">VIP account</a>,
                    there is a commission of 1 currency unit per side per lot (0.0010% notional) in the base currency of
                    the trading instrument.
                </p>
                <p className="Response Bot">
                    <h3>Example Scenarios:</h3>
                    <ul>
                        <li>For 1 lot on EURUSD (1 lot = 100,000 EUR):
                            <ul>
                                <li>Commission: 1 EUR per side, 2 EUR per round turn.</li>
                            </ul>
                        </li>
                        <li>For 1 lot on GBPUSD:
                            <ul>
                                <li>Commission: 1 GBP per side, 2 GBP per round turn.</li>
                            </ul>
                        </li>
                        <li>For 1 lot on AUDUSD:
                            <ul>
                                <li>Commission: 1 AUD per side, 2 AUD per round turn.</li>
                            </ul>
                        </li>
                    </ul>
                    <br/>
                    <strong>Note:</strong> If you have a USD account, then 2 EUR, 2 GBP, and 2 AUD will be automatically
                    converted to USD.
                </p>
            </div>
        )
    },
    {
        id: 71,
        message: (
            <div className={"ResponseContainer"}>
                <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                <h4 className={"Response Bot"}><em>"What is the margin call procedure for MT4/MT5?"</em>
                </h4>
                <p className={"Response Bot"}>
                    Negative price movement can potentially lead to a margin call and the subsequent triggering of an
                    automated margin close-out of positions. In the event that market conditions are unfavourable to
                    you, we will set a stop-out level to reduce your maximum loss. This means that we will set a
                    threshold of margin value, below which positions are automatically closed.
                    <br/><br/>
                    <ul>
                        <li>Stop-Out Levels:</li>
                        <ul>
                            <li>30% of the margin for Professional Clients</li>
                            <li>50% of the margin for Retail Clients</li>
                        </ul>
                    </ul>

                </p>
                <p className={"Response Bot"}>
                    For instance, if the margin is 100:
                    <ul>
                        <li>The position would automatically close if the net equity reaches 50 or lower (for Retail
                            Clients).
                        </li>
                    </ul>
                    <br/>
                    In a nutshell, once your account net equity drops below 100% of the initial margin required to
                    establish the open position(s), the MT4/MT5 changes colour, to red, to indicate that you are close
                    to or, on margin call. Once your account net equity drops below 30% of the margin requirements
                    (depending on entity and client classification), it will close your trades one by one, starting with
                    the trade with the biggest loss.
                    <br/><br/>
                    <strong>*Net equity</strong>: Defined as the sum of the client’s net profit and loss on an open
                    position(s) and client’s deposited funds.
                </p>
            </div>
        )
    },
    {
        id: 72,
        message:
            (
                <div className={"ResponseContainer"}>
                    <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                    <h4 className={"Response Bot"}><em>"What is Tickmill’s trade execution model?"</em>
                    </h4>
                    <p className={"Response Bot"}>
                        Tickmill’s execution model is designed to provide a fast and secure trading experience for
                        clients.
                        Tickmill’s hybrid execution model therefore involves both market-making and straight through
                        processing. Such a model guarantees an average execution time of 0.20 seconds of trades with
                        no-requotes, and some of the best spreads in the market.
                    </p>
                </div>
            )
    },
    {
        id: 73,
        message: (
            <div className={"ResponseContainer"}>
                <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                <h4 className={"Response Bot"}><em>"What is your order execution speed?"</em>
                </h4>
                <p className={"Response Bot"}>
                    Our average execution speed is around 0.20 seconds.
                </p>
            </div>
        )
    },
    {
        id: 74,
        message: (
            <div className={"ResponseContainer"}>
                <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                <h4 className={"Response Bot"}><em>"Where is Tickmill regulated?"</em>
                </h4>
                <p className={"Response Bot"}>
                    Tickmill is the trading name of Tickmill Europe Ltd which is authorised and regulated by the Cyprus
                    Securities and Exchange Commission (CySEC).
                </p>
                <p className={"Response Bot"}>
                    Tickmill is also the trading name of Tickmill
                    UK Ltd which is authorised and regulated by the UK Financial Conduct Authority (FCA) and the Dubai
                    Financial Services Authority as a Representative Office, of Tickmill Ltd which is regulated by the
                    Financial Services Authority of Seychelles (FSA), of Tickmill Asia Ltd, which is authorised and
                    regulated by the Labuan Financial Services Authority and of Tickmill South Africa (Pty) Ltd, which
                    is authorised and regulated by the Financial Sector Conduct Authority (FSCA).
                </p>
            </div>
        )
    },
    {
        id: 5000,
        message: (
            <div className={"ResponseContainer"}>
                <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                <p className={"Response Bot"}>
                    I assist user experience by providing an interactive FAQ chat.
                </p>
            </div>
        )
    },
    {
        id: 9999,
        message: (
            <div className={"ResponseContainer"}>
                <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                <p className={"Response Bot"}>
                    I'm having trouble answering to you. Try to rephrase question or contact <a title="Client Support"
                                                                                                href="https://www.tickmill.eu/about/contact-us"
                                                                                                target="_blank">Client
                    Support</a>
                </p>
            </div>
        )
    },
    {
        id: 9998,
        message: (
            <div className={"ResponseContainer"}>
                <Branding imgWidth="12px" imgHeight="16px" imgMarginRight="6px" sizeSmall={true}/>
                <p className={"Response Bot"}>
                    Glad I could assist!
                </p>
            </div>
        )
    },
];
const AccountInformation = [
    {
        "id": 1,
        "question": "Are trading conditions the same on my demo and live account?",
        "answer": "Yes, the trading conditions are the same. However, please note that demo accounts operate in a simulated environment which means that no slippage occurs whereas price updates might differ from live accounts."
    },
    {
        "id": 2,
        "question": "Can I change the balance of my demo account?",
        "answer": "Yes. Simply send an email with your demo account number and decided balance to our Support team."
    },
    {
        "id": 3,
        "question": "Can I change the settings of my demo account?",
        "answer": "Yes. Simply send an email with your demo account number and decided changes to our Support team."
    },
    {
        "id": 4,
        "question": "Can I have a demo and live account working at the same time?",
        "answer": "Yes. In order to do so, install a MetaTrader platform in different folders on your computer for each of your trading accounts."
    },
    {
        "id": 5,
        "question": "Can the account be closed/deleted?",
        "answer": "You can close an account but we will keep your data, in accordance with legislation, on our files for a minimum period of 7 years. If your account is inactive for 60 days or more and the balance is equal or less than 50 GBP/EUR/USD/CHF and/or 250 PLN, your account will be archived."
    },
    {
        "id": 6,
        "question": "How do I modify or delete a trade in the MetaTrader platform?",
        "answer": "Right-click on the instrument you placed the trade with and use the options ‘Modify the trade’ or ‘Delete the trade’."
    },
    {
        "id": 7,
        "question": "How do I open a MetaTrader account?",
        "answer": "You can open an account in the Client Area, efficiently and securely. Click here to open an account with us."
    },
    {
        "id": 8,
        "question": "I forgot my Client Area password. What do I do?",
        "answer": "Go to the Client Area login page click on the ‘Forgot your Password?’ link under the ‘Login’ button and follow the instructions on how to reset your password. For further assistance, please contact our Client Support team."
    },
    {
        "id": 9,
        "question": "I forgot my MetaTrader account password. What do I do?",
        "answer": "You can change the password of your MetaTrader 4 or MetaTrader 5 account inside the secure Client Area. For further assistance, please contact our Client Support team."
    },
    {
        "id": 10,
        "question": "Is it possible to archive an account that is not in use?",
        "answer": "An account may get archived under certain conditions. If the account balance is equal or less than 50 GBP/EUR/USD/CHF and/or 250 PLN and there were no login attempts to the trading platform or no trading activity, no open positions and no withdrawals or deposits made for at least 60 days, then the account will be automatically deactivated and archived by the system and it will no longer be visible in the Client Area. Any balance will be transferred to the wallet."
    },
    {
        "id": 11,
        "question": "What account types do you offer?",
        "answer": "We offer 3 account types: Classic, Pro and VIP. All accounts have the same execution speed. Their differences are: Spreads: The Pro and VIP accounts start at 0.0 pips, whereas the Classic account starts at 1.6 pips. Commission: *There is no commission on the Classic account. *There is a commission of 2 currency units per side per lot (0.0020% notional) on the Pro account in the base currency of the trading instrument. Example: If you trade 1 lot of EURUSD, which has a contract size of 100,000 EUR, then your commission per side would be 2 EUR and 4 EUR round turn. *There is a commission of 1 currency unit per side per lot (0.0010% notional) on the VIP account in the base currency of the trading instrument. Example: If you trade 1 lot of EURUSD, which has a contract size of 100,000 EUR, then your commission per side would be 1 EUR and 2 EUR round turn. The minimum deposit for the Pro and Classic account is: 100 USD/EUR/ GBP/PLN. The minimum balance for the VIP account is 50,000 USD/EUR/ GBP/PLN. Important note: The minimum balance requirement should always be fulfilled to maintain VIP account status. Tickmill reserves the right to change your account type at any time if the above requirement is not met or if any abuse is identified. You can find out more information about our account types at: https://www.tickmill.eu/trading/accounts-overview"
    },
    {
        "id": 12,
        "question": "What are the requirements to register for a Client Area?",
        "answer": "To register for an individual Client Area, you must submit your Proof of Address (POA) and Proof of Identity (POI) documents, whereas to register for a Corporate Client Area, you must submit: Articles of association, identification document and proof of individual and corporate address. Certificate of incorporation or company registration card (must show the address, legal representatives, registration data). We will ask for additional documents depending on the country, beneficiary etc. (offshore:). E.g.: Certificate of incorporation Articles of association Memorandum of understanding Certificate of good standing Certificate of incumbency/ Register of Members POI and POA documents for directors and shareholders."
    },
    {
        "id": 13,
        "question": "When are swaps charged at a triple rate for currency pairs and metals?",
        "answer": "Triple swap charges apply for positions on FX pairs, Silver and Gold that are held overnight on Wednesday. For the rest of the instruments, triple swap charges apply for positions that are held overnight on Friday. This is a standard practice in the forex industry. These swaps cover the interest for Saturday and Sunday when the markets are closed. All swaps are calculated based on the quote currency. Example: If you open a long position of 1 lot on EURAUD, the overnight swap charge would be -14.11 Australian Dollars. If you had opened the same position on a Wednesday and roll over the position to the next day, the swap would be -14.11 * 3. If the account currency is in USD, then we have to convert the amount above to USD by using AUDUSD spot rate."
    },
    {
        "id": 14,
        "question": "Where can I check the SWAP rates?",
        "answer": "We update the swaps based on the rates given to us by our counterparties and we recommend checking the swap rates on a regular basis within the MetaTrader platform. Our updated swaps are always available by clicking here. You can also check the swap rates by logging into the MetaTrader trading platform and select: View > Symbols > Select instrument > Properties There are two types of positions: buy and sell. You must look at the Financing long for swaps for buy positions and at the Financing short for swaps for sell positions. Swaps are charged at 00:00 platform time."
    },
    {
        "id": 15,
        "question": "Where can I find my account balance and my trading history?",
        "answer": "You can find your account balance and trading history in the MetaTrader platform. The account balance can also be seen in your Client Area."
    },
    {
        "id": 16,
        "question": "Will my funds be protected at Tickmill?",
        "answer": "As a member of the Investors Compensation Fund (ICF) in Cyprus, all retail clients of Tickmill Europe Ltd are covered in the event of default by Tickmill Europe Ltd. Eligible clients are covered with an amount either equal to twenty thousand Euros (EUR 20,000), or 90% of the covered investor’s claim, whichever is lower (per client)."
    }
];

const DepositsAndWithdrawals = [
    {
        "id": 17,
        "question": "Can I transfer my money from trading account if I have an open position(s)?",
        "answer": "Yes, you can. However, at the moment of transfer from trading account to Wallet, your free margin must exceed the requested amount. Free margin is calculated as equity minus the necessary margin (which is required to maintain an open position). If you do not have sufficient free margin on your trading account, a transfer from trading account to Wallet will not be executed until you submit the correct amount of transfer and/or close the open positions on your account. Withdrawal from a Tickmill Wallet can be requested any time."
    },
    {
        "id": 18,
        "question": "Can I withdraw via a different payment method from the one I used to deposit?",
        "answer": "Tickmill’s policy is to process withdrawals via the same method that you used to deposit. For example, if you deposited using a credit card, the card will be credited with the amount equal to the deposit amount. Upon request, we can send any profits via other payment methods under your name."
    },
    {
        "id": 19,
        "question": "Do you have any charges on deposits and withdrawals?",
        "answer": "Tickmill has a zero fees policy on deposits and withdrawals."
    },
    {
        "id": 20,
        "question": "How do I deposit funds to my account?",
        "answer": "You can make a deposit inside your Client Area using any funding option that suits you best. There are no fees on deposits."
    },
    {
        "id": 21,
        "question": "How do I withdraw funds from my account?",
        "answer": "Log in to your Client Area and fill in the respective withdrawal form. There are no fees on withdrawals."
    },
    {
        "id": 22,
        "question": "How fast do you process my withdrawals?",
        "answer": "We process all withdrawal requests within one working day."
    },
    {
        "id": 23,
        "question": "How long does it take for funds to reach my bank account?",
        "answer": "We process all withdrawal requests within one working day. The time necessary for the funds to reach your bank account depends on your bank’s policy. Bank withdrawals can take 3-7 working days to be seen on the client’s account. Credit/debit card withdrawals can take up to 8 working days to be seen on the client’s account."
    },
    {
        "id": 24,
        "question": "Is broker to broker transfer allowed?",
        "answer": "We do not support broker to broker transfer, we only offer our standard payment methods."
    },
    {
        "id": 25,
        "question": "What is the minimum deposit?",
        "answer": "The minimum deposit for all account types is $100. However, to get a VIP account, you have to reach a balance of minimum $50,000."
    }
];

const ProductInterventionMeasures = [
    {
        "id": 26,
        "question": "Are the measures permanent?",
        "answer": "The product intervention measures have been adopted by the relevant competent authority on a permanent basis."
    },
    {
        "id": 27,
        "question": "Can I have a professional account and a retail account at the same time?",
        "answer": "A client can be a Retail or a Professional Client. Tickmill Europe Ltd will not be offering a retail and a professional account at the same time. You will be classified either as a Professional or a Retail Client."
    },
    {
        "id": 28,
        "question": "Do I get negative balance protection as an elective Professional Client?",
        "answer": "Yes, professional clients can benefit from negative balance protection. It is important to note that Tickmill offers Negative Balance Protection to professional clients, which is not the industry standard. We also reserve the right to withdraw this privilege."
    },
    {
        "id": 29,
        "question": "Do the product intervention measures apply to companies as well?",
        "answer": "Yes, they do. The measures apply to Retail Clients, whether they are individuals or corporations."
    },
    {
        "id": 30,
        "question": "Do the product intervention measures only apply to clients living in the EU?",
        "answer": "The product intervention measures apply to all clients trading with Tickmill Europe Ltd, irrespective of their location."
    },
    {
        "id": 31,
        "question": "Does my professional qualification guarantee I will become a Professional Client?",
        "answer": "No. A relevant qualification alone will not guarantee that someone will become a Professional Client. However, it will be looked upon favorably."
    },
    {
        "id": 32,
        "question": "How can I become a Professional Client?",
        "answer": "A client who wishes to be reclassified must meet the minimum criteria to be eligible to become an elective Professional Client. Clients who wish to do so must complete the relevant application form inside the Client Area. Before completing the application, clients should read the information available in the Client Area regarding protections that Elective Professionals lose in comparison to Retail Clients."
    },
    {
        "id": 33,
        "question": "Once I become a Professional Client, can I revert to Retail Client status if I wish?",
        "answer": "Yes – Clients have the right to be reclassified at any time. Please email our Compliance department."
    },
    {
        "id": 34,
        "question": "What are the minimum requirements to become a Professional Client?",
        "answer": "A Professional Client must possess the relevant experience, knowledge and expertise to be able to make their own investment decisions and properly assess the risks involved. Please refer to the criteria set out above, under ’Elective Professional Client’."
    },
    {
        "id": 35,
        "question": "What are the practical implications of becoming a Professional Client?",
        "answer": "As a Professional Client, you will not have the following protections afforded to Retail Clients under CySEC: FOS – If you are an elective Professional Client who is not defined as a ‘consumer’, you will not have access to the Financial Ombudsman Service (FOS). No leverage restrictions – You might be exposed to higher leverages that can amplify your losses. Investors Compensation Fund (ICF) – Professional Clients under Tickmill Europe Ltd (CySEC regulated) are not entitled to a compensation by the ICF. These are listed in the Loss of Protection section in the Client Area that you need to read and accept before your application is submitted."
    },
    {
        "id": 36,
        "question": "What are the product intervention measures?",
        "answer": "The product intervention measures stipulated by the relevant competent authority restrict the marketing, distribution or sale of CFDs to retail investors, by providing the following protections: Leverage limits, Margin close-out rule, Negative balance protection, Prohibition on benefits and incentivising trading, Standardised risk warning."
    },
    {
        "id": 37,
        "question": "What can I do if I fail to meet the minimum criteria to reclassify as a Professional Client?",
        "answer": "Our Retail Clients will enjoy the maximum protection available under CySEC rules. If you do not meet the minimum requirements, then you will continue to be classified as a Retail Client. Kindly note that you should NOT provide false information in order to qualify as a Professional Client."
    },
    {
        "id": 38,
        "question": "What can I use in my investment portfolio?",
        "answer": "You can use bank statements, share certificates and SIPS (provided it is not a company pension). This list is not exhaustive. We will not accept company pensions, physical commodities and fixed assets (including properties and vehicles)."
    },
    {
        "id": 39,
        "question": "What criteria do I need to meet to become a Professional Client?",
        "answer": "Clients reclassifying as Elective Professionals are required to satisfy a 2/3 criterion: An Investment Portfolio size equal to or greater than €500,000.00; Significant trading experience; And professional experience in the financial services industry with leveraged products, for one year or more."
    },
    {
        "id": 40,
        "question": "What does a leverage limit imply?",
        "answer": "The leverage limits imposed on CFDs set the maximum leverage that providers can offer you opening a CFD position. In order to comply with the ESMA Product Intervention measures, Tickmill has reduced the maximum leverage of Retail Clients from 1:300 to 1:30."
    },
    {
        "id": 41,
        "question": "What evidence will a client be asked to submit to reclassify as a Professional Client?",
        "answer": "Evidence of trading activity showing approximately 40 trades of a significant size during the past year. Any documentation that shows that the client has worked in the industry in the relevant financial sector for over a year in a professional position requiring knowledge of the transactions or services envisaged. Bank statements, share certificates, broker accounts, etc. that evidence 500,000 EUR or more in investments."
    },
    {
        "id": 42,
        "question": "What is ESMA?",
        "answer": "ESMA is an independent EU Authority that contributes to safeguarding the stability of the European Union’s financial system by enhancing the protection of investors and promoting stable and orderly financial markets."
    },
    {
        "id": 43,
        "question": "What is negative balance protection?",
        "answer": "The negative balance protection limits the maximum losses that a retail investor could have. It is designed as a backstop for cases when margin close-out does not work effectively as a result of a very sudden price movement."
    },
    {
        "id": 44,
        "question": "What is the new margin close-out rule and what are the practical implications of it?",
        "answer": "The margin close-out rule standardizes the percentage of margin at which CFD providers are required to close out a CFD or multiple CFD positions. The margin close-out has been set at 50% to ensure that investors’ margin is not eroded close to zero."
    },
    {
        "id": 45,
        "question": "What level of professional experience do I need to have to qualify as a Professional Client?",
        "answer": "The minimum professional experience requirement is to have worked in an industry and a role that required a good understanding of CFDs and the foreign exchange market for at least one year."
    },
    {
        "id": 46,
        "question": "Who can be a Professional Client?",
        "answer": "A Professional Client can be either ’by default’ or ’elective’. By Default Professional Client: A client required to be authorized or regulated to operate in the financial markets, including but not limited to credit institutions, investment firms and insurance companies. A large undertaking meeting of two of the following size requirements on a company basis: A balance sheet total of 20,000,000 EUR or more; A net turnover of 40,000,000 EUR or more; Own funds of 2,000,000 EUR or more; A national or regional government, including a public body that manages public debt, central banks, international or supranational institutions. An institutional investor whose main activity is to invest in financial instruments. A large undertaking, including a partnership, a body corporate or an unincorporated association, which meet the relevant criteria. Elective Professional Client: A client must meet the requirements set by CySEC."
    },
    {
        "id": 47,
        "question": "Will my funds still be protected if I become a Professional Client?",
        "answer": "If you choose to become an elective Professional Client, your funds will continue to be held in segregated accounts but will not be covered by the Investor Compensation Fund (ICF)."
    }
];

const TradingConditions = [
    {
        "id": 48,
        "question": "Are hedging and scalping allowed?",
        "answer": "Hedging is allowed. The required margin for hedging positions on Classic, Pro, and VIP accounts is 0. Scalping is also allowed. There are no time limitations for keeping the positions open."
    },
    {
        "id": 49,
        "question": "Do I get any requotes?",
        "answer": "Tickmill is one of the few brokers that doesn’t have any requotes."
    },
    {
        "id": 50,
        "question": "Do you offer FIX API connection?",
        "answer": "We offer FIX API connection to our large private clients and institutional clients. The minimum account balance required is 500,000 £$€ and the required minimum monthly commission fee generated should be 5,000 £$€. We are not offering a demo version. If a client generates 5,000 £$€ or more in monthly commissions, then we do not charge any fees for using this service. However, if the monthly commissions are less than 5,000 £$€, then a fee applies (5,000 £$€ – amount of commission generated)."
    },
    {
        "id": 51,
        "question": "Do you offer MetaTrader MultiTerminal?",
        "answer": "We do not offer MetaTrader MultiTerminal.\n\nIf you wish, you can install multiple MetaTrader platforms and place them in different folders. You can download the MT4 platform and the MT5 platform from our website.\n\nIf you click ‘NEXT’ on the first screen, it will then install MT4 or MT5 to the default folder without asking. On the first screen, you will see the options ‘NEXT’, ‘CANCEL’ and ‘SETTINGS’. You need to click on ‘SETTINGS’ to change the default folder. Then, the system will give you the option to change the default install patch."
    },
    {
        "id": 52,
        "question": "Do you offer negative balance protection/cover negative balance?",
        "answer": "Traders who use the maximum leverage available face the risk of a negative balance.\n\nFor example: Let’s assume that you have 200 USD on your account and you open 1 lot on USDJPY on Friday evening, with 1:30 leverage and 200 USD margin.\n\nOn Sunday night, the market opens 30 pips away from Friday’s closing price in a direction against you, so your position will immediately have a loss of 30 pips x 10 USD = 300 USD loss, while you have only 200 USD on your account.\n\nThe position will be automatically closed and your account would have a negative balance of -100 USD. This situation is 100% impossible when a trader uses 1:1 leverage. The higher leverage a trader uses, the more risks they take. Please also note that a negative balance may occur due to a slippage during high volatility.\n\nOur Risk department is constantly monitoring our clients’ risk-taking and if we see that a client trades irresponsibly, then we will notify the client via e-mail and ask them to reduce risk exposure. Also, we might reduce the leverage on the client’s account.\n\nAs a CySEC regulated broker, we cover the negative balance of our clients."
    },
    {
        "id": 53,
        "question": "Do you offer Swap-Free accounts?",
        "answer": "Yes, we offer Muslim traders all our accounts with a swap-free option."
    },
    {
        "id": 54,
        "question": "Do you provide tick data?",
        "answer": "Currently, we do not provide tick data, as MetaTrader platforms are not able to store all ticks. Therefore, the tick data would not be accurate. There is an option for the server to store tick data, but we do not use it, as it is not able to store 100% of the ticks. In addition, that would slow down the server considerably due to a large amount of data, as the ticks are not filtered."
    },
    {
        "id": 55,
        "question": "Does slippage occur in your platform?",
        "answer": "At Tickmill, slippage can occur during big news announcements, depending on the market conditions and volatility. There could be both positive and negative slippage."
    },
    {
        "id": 56,
        "question": "Does Tickmill offer Cash or Future CFDs?",
        "answer": "We do offer Cash CFDs that allow you to trade with a continuous price that isn’t subject to an expiration date. The Cash CFD price is derived from the underlying futures contracts."
    },
    {
        "id": 57,
        "question": "How can I find/check historical data?",
        "answer": "You can download historical data from the MetaTrader trading platform, by clicking on:\n\nTools > History Centre – then choose a trading instrument and finally press the ‘Download’ button.\n\nHistory will then be available on your trading platform, so you can click on:\n\nFile > Open offline > Open Offline Chart.\n\nPlease note that the longer the time frame, the longer the available history will be. For example, M5 history is available for 1.5 weeks, M15 history for 1 month, etc."
    },
    {
        "id": 58,
        "question": "How many platforms are available for trading?",
        "answer": "We offer some of the most popular and easy-to-use platforms, the MetaTrader 4 and the MetaTrader 5, which are available for Windows, OS X, iOS and Android. At Tickmill, you can also trade instantly with our Web Trader that requires no installation whatsoever."
    },
    {
        "id": 59,
        "question": "VWAP Execution explained",
        "answer": "The VWAP or Volume Weighted Average Price is the average price at which your order is executed, where each trade price is weighted by the fraction of the volume associated with the trade.\n\nFor instance, when a trader places a large position, it may be filled at different prices as per the current market liquidity. VWAP summarizes all trades that occurred from the start of the order until the order was completed.\n\nIf you decide to buy 6 Million EURUSD at market, the order will be filled through the top 3 price levels of the trading book:\n\nBID Volume\n\nBID Quotes\n\nSpread\n\nASK Quotes\n\nASK Volume\n\n1,000,000\n\n1.20204\n\n0.1 pip\n\n1.20205\n\n1,500,000\n\n5,000,000\n\n1.20203\n\n0.3 pip\n\n1.20206\n\n2,000,000\n\n600,000\n\n1.20202\n\n0.5 pip\n\n1.20207\n\n3,200,000\n\n2,200,000\n\n1.20202\n\n0.6 pip\n\n1.20208\n\n3,500,000\n\nNote: quotes and volumes in this table are only for illustrative purposes and they will depend on the current market liquidity\n\nIn detail,\n\nBuy 1,5 million at 1.20205 (cumulative volume = 1,5 million; remaining to fill = 4,5 million)\nBuy 2 million at 1.20206 (cumulative volume = 3,5 million; remaining to fill = 2,5 million)\nBuy 2,5 million at 1.20207 (cumulative volume = 6 million; remaining to fill = 0)\nIn summary, your VWAP or Volume Weighted Average Price, will be calculated using the following formula:\n\nVWAP = (1,500,000/6,000,000) x 1.20205 + (2,000,000/6,000,000) x 1.20206 + (2,500,000/6,000,000) x 1.20207\n\nVWAP = 1.202062"
    },
    {
        "id": 60,
        "question": "What are the advantages of trading with Tickmill?",
        "answer": "Tickmill provides you with low spreads starting from 0.0 pips and ultra-fast execution speed of 0.15 second on average. Skrill, Neteller and credit card deposits are processed instantly while withdrawals are processed within one working day. We are proud that we have no restrictions on trading and no requotes. We also allow scalping, hedging, arbitrage, EAs and algorithms."
    },
    {
        "id": 61,
        "question": "What are the limits of setting SL, TP, and TS?",
        "answer": "You can set Stop Loss and Take Profit orders with no limits on all account types. SL and TP orders will still be active, even if your computer is switched off. The minimum Trailing Stop level is 1.5 pips or 15 points. It is possible to set only 1 trailing stop per order. You need to have the MetaTrader platform open to keep the trailing stop active."
    },
    {
        "id": 62,
        "question": "What are the minimum and maximum account leverage you offer?",
        "answer": "For Retail Clients:\nThe minimum leverage is 1:1. The maximum and default leverage is 1:30.\n\n1:30 on Major FX Pairs\n1:20 on Major Stock Indices, Non-Major Currencies and Gold\n1:10 on Silver, Oil and Non-Major Indices\n1:5 on Bonds\nFor Professional Clients:\nThe minimum leverage is 1:1. The maximum and default leverage is 1:300.\n\nLeverage for Metals: The leverage for gold is equal to the account leverage, while the leverage for silver is 4 times lower than the account leverage. If the trading account has a leverage of 1:300, then the leverage for gold will be 1:300 and the leverage for silver will be 1:75.\n\nFor more information about our leverage and margin requirements, click here."
    },
    {
        "id": 63,
        "question": "What are the minimum and maximum position sizes?",
        "answer": "The minimum trade size is 0.01 lot and the maximum trade size is 100 lots. The maximum amount of orders you can open on a MetaTrader account is 200."
    },
    {
        "id": 64,
        "question": "What are your margin call/stop out levels?",
        "answer": "Our margin call / stop out levels are different depending on whether you are a Retail or a Professional client:\n\nClient Classification Margin Call / Stop Out\nRetail Client 100% / 50%\nProfessional Client 100% / 30%\nYour account may be subject to a margin call if your account equity falls to a level that is equal to the margin of your existing positions. For example, you have an open position of 1 lot on EURUSD. The margin to hold that position is 3,333.33 EUR for Retail Clients.\n\nWhen you opened the account, you had a 6,000 EUR equity on your account. When the position starts to move against you and your account equity falls to 3,333.33 EUR, you will have a margin call. But your position will not be closed yet. When your account equity falls to 50% of the required margin, then the system starts to close your positions immediately.\nTaking the above example, if you open a position with 3,333.33 EUR of margin and your account equity falls to 1,666.66 EUR, then the system starts to close your position. If you have several positions opened, then the system closes them starting from the one with the biggest loss.\n\nIf, while closing the positions, your account equity reaches a level of more than 50% of the required margin, all other positions will remain open.\n\n*This is an illustrative example."
    },
    {
        "id": 65,
        "question": "What are your spreads?",
        "answer": "We offer floating spreads for all account types – Classic, Pro, and VIP. The Classic account offers variable spreads, starting from 1.6 pips with no commissions. Both Pro and VIP accounts offer variable spreads, starting from 0.0 pips with low commissions.\n\nYou can check out our spreads by clicking here.\n\nAt market opening and closing times and prior to announcements, the market spreads may widen substantially. Consequently, you must ensure that you have sufficient funds on your account to cover this eventuality."
    },
    {
        "id": 66,
        "question": "What are your trading hours?",
        "answer": "FX trading is available 24 hours a day, 5 days a week. You can trade on Monday from 00:02 until 24:00, from Tuesday 00:00 to Thursday 24:00 and on Friday from 00:00 until 23:58 (MT4 Server time). Find out more here.\n\nFor CFDs on Precious Metals, our specific trading hours are listed here.\n\nFor CFDs on Stock Indices and Oil, our specific trading hours are listed here.\n\nFor CFDs on Bonds, our specific trading hours are listed here.\n\nFor CFDs on Stocks, our specific trading hours are listed here.\n\nCryptocurrency trading is available from Monday 00:00 to Sunday 24:00 (MT4/MT5 Server time).\n\nThe server time is set to GMT+2 and GMT+3 during DST in the US and Europe.\n\nTrading hours can be also viewed in your MT4 or MT5 terminal (Market Watch > Right click on the symbol > Specification).\n\nNote: Trading hours are subject to change without prior notice. Liquidity Providers may adjust trading schedule as necessary, depending on market conditions."
    },
    {
        "id": 67,
        "question": "What commission will I be charged for trading on the MetaTrader platform?",
        "answer": "There are no commissions on the Classic account. The commission on the Pro account is 2 units of the base currency per side per lot and on the VIP account 1 unit of the base currency per side per lot."
    },
    {
        "id": 68,
        "question": "What is slippage?",
        "answer": "Slippage often occurs during periods of higher volatility (for example due to news events), making an Order at a specific price impossible to execute, when market orders are used, and also when large Orders are executed when there may not be enough interest at the desired price level to maintain the expected price of trade. All trades are executed at the first available market price. As market prices are moving constantly, then it is often the case that clients get either positive or negative slippage."
    },
    {
        "id": 69,
        "question": "What is the commission on the Pro account?",
        "answer": "The Pro account has a commission of 2 currency units per side per lot (0.0020% notional) in the base currency of the trading instrument.\n\nFor example, if you open 1 lot on EURUSD (1 lot = 100,000 EUR), then the commission is 2 EUR per side and 4 EUR per round turn.\n\nFor 1 lot on GBPUSD, the commission is 2 GBP per side and 4 GBP per round turn.\n\nFor 1 lot on AUDUSD, the commission is 2 AUD per side and 4 AUD per round turn.\n\nIf you have a USD account, then 4 EUR, 4 GBP and 4 AUD will be automatically converted to USD."
    },
    {
        "id": 70,
        "question": "What is the commission on the VIP account?",
        "answer": "On the VIP account, there is a commission of 1 currency unit per side per lot (0.0010% notional) in the base currency of the trading instrument.\n\nFor example, if you open 1 lot on EURUSD (1 lot = 100,000 EUR), then the commission is 1 EUR per side and 2 EUR per round turn.\n\nFor 1 lot on GBPUSD, the commission is 1 GBP per side and 2 GBP per round turn.\n\nFor 1 lot on AUDUSD, the commission is 1 AUD per side and 2 AUD per round turn.\n\nIf you have a USD account, then 2 EUR, 2 GBP and 2 AUD will be automatically converted to USD."
    },
    {
        "id": 71,
        "question": "What is the margin call procedure for MT4/MT5?",
        "answer": "Negative price movement can potentially lead to a margin call and the subsequent triggering of an automated margin close-out of positions. In the event that market conditions are unfavourable to you, we will set a stop-out level to reduce your maximum loss. This means that we will set a threshold of margin value, below which positions are automatically closed. This stop out is set at 30% of the margin for Professional Clients, and at 50% of the margin for Retail Clients.\n\nFor example, based on a margin of 100, the position would be automatically closed if the net equity* reaches 50 or lower (for Retail Clients).\n\nIn a nutshell, once your account net equity drops below 100% of the initial margin required to establish the open position(s), the MT4/MT5 changes colour, to red, to indicate that you are close to or, on margin call. Once your account net equity drops below 30% of the margin requirements (depending on entity and client classification), it will close your trades one by one, starting with the trade with the biggest loss.\n\n*Net equity: Defined as the sum of the client’s net profit and loss on an open position(s) and client’s deposited funds."
    },
    {
        "id": 72,
        "question": "What is Tickmill’s trade execution model?",
        "answer": "Tickmill’s execution model is designed to provide a fast and secure trading experience for clients. Tickmill’s hybrid execution model therefore involves both market-making and straight through processing. Such a model guarantees an average execution time of 0.20 seconds of trades with no-requotes, and some of the best spreads in the market."
    },
    {
        "id": 73,
        "question": "What is your order execution speed?",
        "answer": "Our average execution speed is around 0.20 seconds."
    },
    {
        "id": 74,
        "question": "Where is Tickmill regulated?",
        "answer": "Tickmill is the trading name of Tickmill Europe Ltd which is authorised and regulated by the Cyprus Securities and Exchange Commission (CySEC).\n\nTickmill is also the trading name of Tickmill UK Ltd which is authorised and regulated by the UK Financial Conduct Authority (FCA) and the Dubai Financial Services Authority as a Representative Office, of Tickmill Ltd which is regulated by the Financial Services Authority of Seychelles (FSA), of Tickmill Asia Ltd, which is authorised and regulated by the Labuan Financial Services Authority and of Tickmill South Africa (Pty) Ltd, which is authorised and regulated by the Financial Sector Conduct Authority (FSCA)."
    }

];

module.exports = {
    AccountInformation,
    DepositsAndWithdrawals,
    ProductInterventionMeasures,
    TradingConditions
};
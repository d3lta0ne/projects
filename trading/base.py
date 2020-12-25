from pyrh import Robinhood
import config

robinhood = Robinhood()
rhlg_challengetype = "sms"

robinhood.login(username=config.username, password=config.password,
                challenge_type=rhlg_challengetype)

cash = robinhood.get_account()["portfolio_cash"]
portfolio = []
for stock in robinhood.securities_owned()["results"]:
    portfolio.append(stock["instrument"], robinhood.get_url(
        stock["instrument"])['symbol'])
print(portfolio)

for stock, quantity, url in portfolio:
    print(
        f'You have {quantity} share(s) of {stock} at {robinhood.last_trade_price(stock)[0][0]} per share')

# < --- The following does work and will execute a sell --- >
# robinhood.instrument("SNDL")
# robinhood.place_sell_order(robinhood.instrument("SNDL"),1)

robinhood.logout()

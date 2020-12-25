from pyrh import Robinhood
import config

config.username = "lil_president"
config.password = "I7EEVKU^*r%2fa*bjW"

robinhood = Robinhood()
rhlg_challengetype = "sms"

robinhood.login(username=config.username, password=config.password,
                challenge_type=rhlg_challengetype)

quote = robinhood.quote_data("TWTR")

print("\nSPACER SPACER SPACER\n")
robinhood.positions()[results]

# This bot is called Hermes for Shopify Stores

import requests
import json
# from bs4 import BeautifulSoup
# from selenium import webdriver
# from selenium.webdriver.chrome.options import Options

# options = Options()
# options.binary_location = '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser'
# driver_path = '/Users/davidbruno/Downloads/chromedriver'


# driver = webdriver.Chrome(options=options, executable_path=driver_path)

# url = "https://shop.nordstrom.com/c/womens-dresses-shop?origin=topnav&cm_sp=Top%20Navigation-_-Women-_-Dresses&offset=11&page=3&top=72"
# driver.get(url)
# soup = BeautifulSoup(driver.page_source, 'html.parser')
# driver.quit()
# print(soup.prettify())

# List of shopify stores
shopify_stores = ["https://kith.com/"]


# Search for the Product / Query
def avaliblity(store):
    r = requests.get(shopify_stores[0]+"products.json")
    products = json.loads((r.text))["products"]

    print(products)
    for product in products:
    print(product["title"])
    productName = product["title"]
    if productName == "Nike Air Force 1 '07 Craft 2 - Sail / Mantra Orange / Forest":
        print(product)

    productHandle = product["handle"]
    if productHandle == "nkcw5924-200":
        print(product)


# Keyword and Negative Keyword Search


# Add Product to Cart


# Ship Product

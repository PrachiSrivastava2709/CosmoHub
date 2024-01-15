import requests
from bs4 import BeautifulSoup as bs
import re
import json

req = requests.get("http://www.seasky.org/astronomy/astronomy-calendar-2023.html")
soup = bs(req.content, "html.parser")

content = soup.find_all("li", class_ = re.compile("b"))

my_result = {}
for id, element in zip(range(len(content)), content):
    my_result[str(id)] = {"date": element.p.span.extract().get_text(), "title": element.p.span.extract().get_text(), "detail": element.get_text()}

final = json.dumps(my_result, ensure_ascii=False)
print(final)

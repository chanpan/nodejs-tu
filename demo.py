import json
import sys
array = '{"lat":444, "lon":555}'
json_str = json.dumps(array)

data  = json.loads(json_str)
print data
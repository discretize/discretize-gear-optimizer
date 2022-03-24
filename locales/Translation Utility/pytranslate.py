# REQUIREMENTS
# ============
# 1) Python 3.10
# 2) Install of TranslatePy
#
# USAGE
# =====
# 1) Navigate to folder containing script
# 2) Run "pip install translatepy" in CMD
# 3a) Run "pytranslate.py <TWO_DIGIT_LANG>" or
# 3b) Set language in script and run "pytranslate.py"
#
# SUPPORTED LANGUAGES
# ===================
# 'af', 'am', 'ar', 'az', 'be', 'bg', 'bn', 'bs', 'ca', 'ceb', 'co', 'cs', 'cy', 'da', 
# 'de', 'el', 'eo', 'es', 'et', 'eu', 'fa', 'fi', 'fr', 'fy', 'ga', 'gd', 'gl', 'gu', 
# 'ha', 'haw', 'hi', 'hmn', 'hr', 'ht', 'hu', 'hy', 'id', 'ig', 'is', 'it', 'he', 'ja', 
# 'jv', 'ka', 'kk', 'km', 'kn', 'ko', 'ku', 'ky', 'la', 'lb', 'lo', 'lt', 'lv', 'mg', 
# 'mi', 'mk', 'ml', 'mn', 'mr', 'ms', 'mt', 'my', 'ne', 'nl', 'no', 'ny', 'or', 'pa', 
# 'pl', 'ps', 'pt', 'ro', 'ru', 'sd', 'si', 'sk', 'sl', 'sm', 'sn', 'so', 'sq', 'sr', 
# 'st', 'su', 'sv', 'sw', 'ta', 'te', 'tg', 'th', 'tl', 'tr', 'ug', 'uk', 'ur', 'uz', 
# 'vi', 'xh', 'yi', 'yo', 'zh', 'zu'
#
# ACKNOWLEDGEMENTS
# ================
# This utility is written by Roger Cormier aka Xivor at 
# https://github.com/xivor/translate_json_values and licensed under the MIT license.
#
# This utility is powered by the translatepy module located at 
# https://github.com/Animenosekai/translate and licensed under the GNU Affero General 
# Public License v3.0 License.
from translatepy import Translator
import json
import sys
import time
import os
import re

# Declare Variables
translator = Translator()


# Check CMD for argument and select destination lang from CMD or manual input
if len(sys.argv) < 2:
    dLang = "es"
else:
    dLang = sys.argv[1]
sLang = "en"

# Set source and destination filenames
srcFile = "translation.json"
f_name, f_ext = os.path.splitext(srcFile)
destFile = f_name + "_" + dLang + f_ext

# Function to translate the words
def run_translatepy(words):
    translated = translator.translate(
        words, source_language=sLang, destination_language=dLang
    )
    return translated


# Opens translation.json
with open(srcFile, encoding="utf8") as f:
    words = json.load(f)

# Iterates through Json file and translate values
new_words = {}
for key, value in words.items():
    if value == "":
        continue
    else:
        translated = run_translatepy(value)
        translated = re.sub(r"(?:(?<=\/) | (?=\/))", "", str(translated))
    # time.sleep(1)
    # print(translated)
    words[key] = str(translated)

# Converts dictionary to a json object
new_words = json.dumps(words, indent=2, ensure_ascii=False)

# New json file with translated text
with open(destFile, "w", encoding="utf8") as output:
    output.write(new_words)

print()
print("All complete")

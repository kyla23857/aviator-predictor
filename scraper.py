from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager
import time

# Update these variables with your login details
mobile_number = '0818378070'  # Your Betway mobile number
password = 'Andziso1@'         # Your Betway password

# Initialize the Chrome browser using the WebDriver Manager
options = webdriver.ChromeOptions()
options.add_argument("--start-maximized")  # Start the browser maximized
driver = webdriver.Chrome(ChromeDriverManager().install(), options=options)
wait = WebDriverWait(driver, 20)

try:
    # Step 1: Open the Betway login page
    print("Opening login page...")
    driver.get("https://www.betway.co.za")

    # Step 2: Wait for the mobile number field to be present and interact with it
    print("Waiting for mobile number field...")
    mobile_field = wait.until(EC.presence_of_element_located((By.ID, "username")))
    mobile_field.clear()
    mobile_field.send_keys(mobile_number)

    # Step 3: Wait for the password field to be present and interact with it
    print("Waiting for password field...")
    password_field = wait.until(EC.presence_of_element_located((By.ID, "loginPassword")))
    password_field.clear()
    password_field.send_keys(password)

    # Step 4: Submit the login form
    print("Submitting login form...")
    password_field.send_keys(Keys.RETURN)

    # Step 5: Wait for the navigation to the Aviator game page
    print("Navigating to Aviator game page...")
    wait.until(EC.url_contains("lobby/casino-games/launchgame/casino-games/trending/aviator"))
    print("Aviator game page loaded.")

except Exception as e:
    print(f"An error occurred: {e}")

finally:
    # Step 6: Close the browser after a delay
    time.sleep(5)  # Wait for 5 seconds before closing
    driver.quit()

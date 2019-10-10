Feature: Сhecking the correctness of information on the product page

    Scenario Outline: Сhecking the correctness of product title on the product page
        Given User opens main page
        When User clicks SSD reference
        And User clicks learn more button of a "<chosenProduct>"
        Then User checks that product title at product page is "<chosenProduct>"

        Examples:
            | chosenProduct                |
            | SanDisk Extreme Portable SSD |

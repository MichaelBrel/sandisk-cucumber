Feature: Checking the correctness of information on the product page

    Scenario Outline: Checking the correctness of product title on the product page
        Given User opens main page
        When User clicks SSD reference
        And User clicks learn more button of a "<chosenProduct>"
        Then User checks that product title at product page is "<chosenProduct>"

        Examples:
            | chosenProduct                |
            | SanDisk Extreme Portable SSD |

    Scenario Outline: Checking the correctness of product capacity on the product page after changing it by button with capacity value
        Given User opens main page
        When User clicks SSD reference
        And User clicks learn more button of a "<chosenProduct>"
        And User chooses product capacity "<productCapacity>"
        Then User checks that product capacity is "<productCapacity>"

        Examples:
            | chosenProduct                | productCapacity |
            | SanDisk Extreme Portable SSD | 250 GB          |

    Scenario Outline: Checking the correctness of switching region
        Given User opens main page
        When User clicks SSD reference
        And User clicks learn more button of a "<chosenProduct>"
        And User chooses "<region>" where to buy sandisk
        And User chooses "<area>"
        Then User checks that "<distributorName>" is displayed correctly

        Examples:
            | chosenProduct                | region | area    | distributorName |
            | SanDisk Extreme Portable SSD | Europe | Belarus | ASBIS CJSC      |

    Scenario Outline: Checking the correctness of product capacity after changing it by button with capacity value on the product page's find local window
        Given User opens main page
        When User clicks SSD reference
        And User clicks learn more button of a "<chosenProduct>"
        And User clicks find local button
        And User chooses product capacity at the find local window "<productCapacity>"
        Then User checks that product capacity at the find local window is "<productCapacity>"

        Examples:
            | chosenProduct                | productCapacity |
            | SanDisk Extreme Portable SSD | 250GB           |
            
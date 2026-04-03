import { test } from '@playwright/test';

const delay = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
test('Salesforce Recording - Wed Jan 07 2026 15:14:02 GMT+0530 (India Standard Time)', async ({
                                                                                                  page,
                                                                                              }) => {
    test.setTimeout(0);
    page.setDefaultTimeout(120000);
    await page.setViewportSize({ width: 2560, height: 1318 });
    await page.goto(
        'https://sdb600com-e0.demo.test1.my.pc-rnd.salesforce.com/',
    );
    await delay(1);
    const username = process.env.SF_USERNAME || process.env.USERNAME || 'hpsx-sut-org-1@sdb600.com';
    const password = process.env.SF_PASSWORD || process.env.PASSWORD || 'test1234';
    // tagName = "INPUT", inputType = "email", value = "hpsxapex1@sdb600.com", alternative selectors = ['aria/Username[role="textbox"]']
    await page.fill('div > form[name="login"] input[type="email"]', username);
    await delay(1844);
    // tagName = "INPUT", inputType = "password", alternative selectors = ['aria/Password']
    await page.click('div > div input[type="password"]');
    await delay(142);

    // tagName = "INPUT", inputType = "password", value = "******", alternative selectors = ['aria/Password']
    await page.fill('div > div input[type="password"]', password);
    await delay(1028);
    // tagName = "INPUT", inputType = "submit", alternative selectors = ['aria/Log In[role="button"]']
    await page.click('div > div input[type="submit"]');
    await page.waitForLoadState('domcontentloaded', { timeout: 60000 });
    await delay(5000);
    // Click App Launcher (waffle icon)
    await page.waitForSelector('button.slds-icon-waffle_container', { state: 'visible', timeout: 60000 });
    await page.click('button.slds-icon-waffle_container');
    // Search for Accounts in App Launcher
    await page.waitForSelector('input[placeholder="Search apps and items..."]', { state: 'visible', timeout: 30000 });
    await page.fill('input[placeholder="Search apps and items..."]', 'Accounts');
    await delay(2000);
    // Click Accounts from search results - using text match
    await page.click('text=Accounts >> visible=true');
    await page.waitForLoadState('domcontentloaded');
    await delay(982);
    // tagName = "LIGHTNING-PRIMITIVE-ICON"
    await page.click(
        'div.slds-page-header__name > div.slds-align_absolute-center lightning-primitive-icon',
    );
    await page.waitForSelector('div.slds-is-open', { state: 'visible' });
    await delay(1000);
    // tagName = "INPUT", inputType = "text", alternative selectors = ['aria/Search lists...[role="combobox"]']
    await page.click(
        'div.slds-is-open > div.slds-combobox__form-element input[type="text"]',
    );
    await delay(500);
    // tagName = "INPUT", inputType = "text", value = "LoadTestAcc", alternative selectors = ['aria/Search lists...[role="combobox"]']
    await page.fill(
        'div.slds-is-open > div.slds-combobox__form-element input[type="text"]',
        'LoadTestAcc',
    );
    await page.waitForSelector('div.slds-listbox lightning-base-combobox-item', { state: 'visible' });
    await delay(500);
    // tagName = "STRONG"
    await page.click(
        'div.slds-listbox > lightning-base-combobox-item.slds-media:nth-child(1) strong',
    );
    await page.waitForLoadState('domcontentloaded');
    await delay(1426);
    // tagName = "SPAN", parentSelectors = [["div.dt-outer-container > div.slds-table_header-fixed_container tbody"]], alternative selectors = ['text/LoadAcc1$:3dQvLdVTWIyAU7DbtQt']
    await page.waitForSelector('tr.slds-hint-parent lightning-primitive-custom-cell', { state: 'visible' });
    await delay(500);
    const randomAccountRow = getRandomInt(1, 3);
    await page.click(
        `tr.slds-hint-parent:nth-child(${randomAccountRow}) lightning-primitive-custom-cell:nth-child(1) span:nth-child(1)`,
    );
    await page.waitForLoadState('domcontentloaded');
    await delay(5000);
    // Click App Launcher for Contacts
    await page.click('button.slds-icon-waffle_container');
    await page.waitForSelector('input[placeholder="Search apps and items..."]', { state: 'visible', timeout: 30000 });
    await page.fill('input[placeholder="Search apps and items..."]', 'Contacts');
    await delay(2000);
    await page.click('text=Contacts >> visible=true');
    await page.waitForLoadState('domcontentloaded');
    await delay(5000);

    /// ADDED CODE
    // tagName = "LIGHTNING-PRIMITIVE-ICON"
    await page.click(
        'div.slds-page-header__name > div.slds-align_absolute-center lightning-primitive-icon',
    );
    await page.waitForSelector('div.slds-is-open', { state: 'visible' });
    await delay(1000);
    // tagName = "INPUT", inputType = "text", alternative selectors = ['aria/Search lists...[role="combobox"]']
    await page.click(
        'div.slds-is-open > div.slds-combobox__form-element input[type="text"]',
    );
    await delay(500);

    /// ADDED CODE
    // tagName = "INPUT", inputType = "text", value = "LoadTestCont", alternative selectors = ['aria/Search lists...[role="combobox"]']
    await page.fill(
        'div.slds-is-open > div.slds-combobox__form-element input[type="text"]',
        'LoadTestCont',
    );
    await page.waitForSelector('div.slds-listbox lightning-base-combobox-item', { state: 'visible' });
    await delay(500);
    // tagName = "STRONG"
    await page.click(
        'div.slds-listbox > lightning-base-combobox-item.slds-media:nth-child(1) strong',
    );
    await page.waitForLoadState('domcontentloaded');
    await delay(3153);
    // tagName = "SPAN", parentSelectors = [["div.dt-outer-container > div.slds-table_header-fixed_container tbody"]], alternative selectors = ['text/68TCV3k LoadCont10$:MONxZnL3Cv']
    await page.waitForSelector('tr.slds-hint-parent lightning-primitive-custom-cell', { state: 'visible' });
    await delay(500);
    const randomContactRow = getRandomInt(1, 3);
    await page.click(
        `tr.slds-hint-parent:nth-child(${randomContactRow}) lightning-primitive-custom-cell:nth-child(1) span:nth-child(1)`,
    );
    await page.waitForLoadState('domcontentloaded');
    await delay(2575);
    // Click App Launcher for Opportunities
    await page.click('button.slds-icon-waffle_container');
    await page.waitForSelector('input[placeholder="Search apps and items..."]', { state: 'visible', timeout: 30000 });
    await page.fill('input[placeholder="Search apps and items..."]', 'Opportunities');
    await delay(2000);
    await page.click('text=Opportunities >> visible=true');
    await page.waitForLoadState('domcontentloaded');
    await delay(1021);

    await page.click(
        'div.slds-page-header__name > div.slds-align_absolute-center lightning-primitive-icon',
    );
    await page.waitForSelector('div.slds-is-open', { state: 'visible' });
    await delay(1000);
    // tagName = "INPUT", inputType = "text", alternative selectors = ['aria/Search lists...[role="combobox"]']
    await page.click(
        'div.slds-is-open > div.slds-combobox__form-element input[type="text"]',
    );
    await delay(500);
    // tagName = "INPUT", inputType = "text", value = "LoadTest", alternative selectors = ['aria/Search lists...[role="combobox"]']
    await page.fill(
        'div.slds-is-open > div.slds-combobox__form-element input[type="text"]',
        'LoadTest',
    );
    await delay(500);
    await page.keyboard.press('Backspace');
    await page.waitForSelector('div.slds-combobox lightning-base-combobox-item', { state: 'visible' });
    await delay(500);
    // tagName = "LIGHTNING-BASE-COMBOBOX-FORMATTED-TEXT", alternative selectors = ['aria/LoadTestOpptyList1']
    await page.click(
        'div.slds-combobox lightning-base-combobox-item.slds-media:nth-child(1) lightning-base-combobox-formatted-text',
    );
    await page.waitForLoadState('domcontentloaded');
    await delay(1516);
    // tagName = "SPAN", parentSelectors = [["div.dt-outer-container > div.slds-table_header-fixed_container tbody"]], alternative selectors = ['text/LoadOppty1$:5UnjbT9WdP1JawWImDnMDG']
    await page.waitForSelector('tr.slds-hint-parent lst-output-lookup', { state: 'visible' });
    await delay(500);
    const randomOpportunityRow = getRandomInt(1, 3);
    await page.click(
        `tr.slds-hint-parent:nth-child(${randomOpportunityRow}) lst-output-lookup:nth-child(1) span:nth-child(1)`,
    );
    await page.waitForLoadState('domcontentloaded');
    await delay(2467);
    // Click App Launcher for Leads
    await page.click('button.slds-icon-waffle_container');
    await page.waitForSelector('input[placeholder="Search apps and items..."]', { state: 'visible', timeout: 30000 });
    await page.fill('input[placeholder="Search apps and items..."]', 'Leads');
    await delay(2000);
    await page.click('text=Leads >> visible=true');
    await page.waitForLoadState('domcontentloaded');
    await delay(1147);

    await page.click(
        'div.slds-page-header__name > div.slds-align_absolute-center lightning-primitive-icon',
    );
    await page.waitForSelector('div.slds-is-open', { state: 'visible' });
    await delay(1000);
    // tagName = "INPUT", inputType = "text", alternative selectors = ['aria/Search lists...[role="combobox"]']
    await page.click(
        'div.slds-is-open > div.slds-combobox__form-element input[type="text"]',
    );
    await delay(500);
    // tagName = "INPUT", inputType = "text", value = "LoadTestLead", alternative selectors = ['aria/Search lists...[role="combobox"]']
    await page.fill(
        'div.slds-is-open > div.slds-combobox__form-element input[type="text"]',
        'LoadTestLead',
    );
    await page.waitForSelector('div.slds-listbox lightning-base-combobox-item', { state: 'visible' });
    await delay(500);
    // tagName = "STRONG"
    await page.click(
        'div.slds-listbox > lightning-base-combobox-item.slds-media:nth-child(1) strong',
    );
    await page.waitForLoadState('domcontentloaded');
    await delay(1478);
    // tagName = "SPAN", parentSelectors = [["div.dt-outer-container > div.slds-table_header-fixed_container tbody"]], alternative selectors = ['text/Lead Rest 10 LoadLead10$:41alp2X']
    await page.waitForSelector('tr.slds-hint-parent lightning-primitive-custom-cell', { state: 'visible' });
    await delay(500);
    const randomLeadRow = getRandomInt(1, 3);
    await page.click(
        `tr.slds-hint-parent:nth-child(${randomLeadRow}) lightning-primitive-custom-cell:nth-child(1) span:nth-child(1)`,
    );
    await page.waitForLoadState('domcontentloaded');
    await delay(2426);
    // tagName = "SPAN", parentSelectors = [["header.slds-global-header_container span[aria-label=\"Global Header\"] ul.slds-global-actions"]]
    await page.click(
        'button[type="button"] > div.tooltipTrigger span.uiImage',
    );
    await delay(1798);
    // tagName = "A", alternative selectors = ['aria/Log Out[role="link"]']
    await page.click('div.panel-content > div.oneUserProfileCard a.logout');
    await page.waitForLoadState('domcontentloaded');
    await delay(1528);
});

test('Intentional Failure Test - Demonstrates Error Capture', async ({ page }) => {
    test.setTimeout(0);
    page.setDefaultTimeout(120000);
    await page.setViewportSize({ width: 2560, height: 1318 });
    
    console.log('=== INTENTIONAL FAILURE TEST ==');
    console.log('This test demonstrates Playwright error capture and screenshot features');
    
    // Navigate to a page first to show context in screenshot
    await page.goto('https://sdb600com-e0.demo.test1.my.pc-rnd.salesforce.com/');
    await page.waitForLoadState('domcontentloaded');
    await delay(1000);
    
    // This will fail - attempting to click a non-existent element
    console.log('Attempting to click non-existent button (this will fail)...');
    await page.click('button.this-element-does-not-exist', { timeout: 5000 });
});
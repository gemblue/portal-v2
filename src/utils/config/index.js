export let base_url = "https://api.codepolitan.com";
export let apps_url = "https://apps.codepolitan.com";

// Toggle on/off
const devmode = false;

if (devmode) {
    base_url = 'https://api.staging.codepolitan.com';
    apps_url = 'https://staging.codepolitan.com';
}
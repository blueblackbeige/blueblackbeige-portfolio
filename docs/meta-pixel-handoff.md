# Meta Pixel handoff

## Pixel

- Pixel ID: `1655379629524230`
- Website: `https://blueblackbeige.in`
- Implementation: browser Meta Pixel, loaded globally before interactive content.

## Events implemented

| Event | When it fires | Event data | Meaning |
| --- | --- | --- | --- |
| `PageView` | Every initial page visit and Next.js client-side route change | None | Website visit |
| `ViewContent` | Visitor views `/web-design-development`, `/digital-marketing`, or `/seo-organic-growth` | `content_name`, `content_category: Service`, `content_type: product` | Interest in a specific service |
| `Contact` | Visitor opens a direct WhatsApp, email, or phone link | Contact method and `Direct contact` category | Direct contact intent |
| `Lead` | A valid project-enquiry form is submitted and the visitor is handed to WhatsApp | Selected service and `Project enquiry` category | High-intent form-to-WhatsApp handoff |

The Pixel does not receive the enquiry message, visitor name, email address, or phone number.

## How to test after deployment

1. Log in to the Meta account that owns this Pixel and open **Events Manager**.
2. Select Pixel `1655379629524230`, then open **Test events**.
3. Enter `https://blueblackbeige.in` as the test website and open it from the test panel. Keep the Test events tab open.
4. In the test browser, visit the home page, then navigate to a different page. Confirm that `PageView` appears for both visits.
5. Visit each service page listed above. Confirm a `ViewContent` event appears and inspect its parameters.
6. Open a WhatsApp, email, or phone contact link. Confirm `Contact` appears. Close any external application/tab if needed and return to Test events.
7. Complete the project enquiry form and select **Send via WhatsApp**. Confirm `Lead` appears with the selected service name. The event represents the handoff to WhatsApp, not confirmation that the visitor sent the WhatsApp message.

Allow a short delay for events to appear. Test with ad blockers disabled, in a normal browser window, and after accepting any tracking consent that is introduced later.

## Recommended Meta account setup

1. Verify `blueblackbeige.in` in Meta Business Manager.
2. In Aggregated Event Measurement, give `Lead` the highest priority for this domain. Use `ViewContent` and `Contact` as supporting signals and retargeting audiences.
3. Build campaign conversion optimization around `Lead`, because it is the strongest currently measurable website action.
4. Build audiences for service-page viewers, contact actions, and leads; exclude leads from prospecting once a suitable lookback window is chosen.
5. Use Events Manager's Diagnostics and Test events to investigate any missing or duplicated events before using the Pixel for ad optimization.

## Scope and next improvement

This implementation intentionally does not send ecommerce events such as `Purchase`, `AddToCart`, or `InitiateCheckout`, because the site has no corresponding actions.

For better delivery resilience and browser-event matching, a later phase can add Meta Conversions API. It requires a Meta Dataset/access token and a server-side conversion point. The current enquiry flow opens WhatsApp directly, so the website cannot confirm that the visitor actually sent the WhatsApp message.

If visitors from consent-required regions are targeted, add a consent-management flow before loading the Pixel or sending Meta events.

# Study Sprout

A pastel study planner for Singapore secondary-school students, with a book-and-flowers logo.

## Features
- Daily study tasks with estimated durations and optional start times.
- Secondary 1–4 profiles, subjects and editable subject-specific task guides.
- Weekly and monthly calendars with completion ticks and workload indicators.
- WA1, WA2, WA3, EYE and Prelim assessment dates.
- Recurring CCA, lessons and training, including travel and rest buffers.
- Shareable PNG calendar snapshots.
- Calendar file exports that track confirmed imports and can include only new items.

## Hosting
This is a static HTML/CSS/JavaScript app. No server, build step or API key is needed.

In repository **Settings → Pages**, select **Deploy from a branch**, then **main** and **/(root)**. The `.nojekyll` file keeps the static files unchanged.

## Moving an existing plan
Plans are stored in the browser's local storage, under the website address. Changing the hosting address does not transfer that storage automatically.

1. At the original app address, open **My study profile → Download backup**.
2. At the new GitHub Pages address, open **My study profile → Restore backup**.
3. Choose the downloaded JSON backup and confirm replacement of the new address's current plan.
4. Check your subjects, assessments, activities, tasks and completion ticks before clearing anything at the original address.

Use the same destination Google Calendar if restoring calendar import history. Imported calendar files do not automatically update or delete previously imported events.

## Privacy and limitations
The GitHub Pages app is publicly accessible. Each student's plan stays in their browser and is not committed to this repository or stored on a shared server. There are no student accounts or teacher dashboards. Calendar images are dated snapshots, and task completion is self-reported.

A different device or browser needs a backup restore. Browser storage can be lost when browsing data is cleared. Keep regular backups. The interface loads fonts from Google Fonts; it falls back to local fonts if unavailable.

The logo was created using OpenAI's built-in image generation tool. All application assets are bundled under `assets/`.

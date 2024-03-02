//  A simple state-management solution. Pinia could also be used,
//  but this project is relatively simple. Still, prop drilling on it's own is annoying.

import { reactive } from "vue";

// An object for the full list of tickets.
// In a more realistic scenario, the tickets array would likely require a method for requesting the data from a database.
export const tickets = reactive({
  total: 0,
  tickets: [],
  addTicket(ticket) {
    this.tickets.append(ticket);
    this.total++;
  },
  removeTicket(index) {
    if (index < this.tickets.length && index > -1) {
      this.tickets.splice(index, 1);
      this.total--;
    }
  },
});

// This object would also likely be loaded from a database or come from some form of login and authentication.
// For this project, I have chosen to allow 2 views to showcase possible utilization of the tickets object.
// When on the 'Admin' screen, the username is irrelevant, but on the 'User' screen, it is added to new tickets,
// so that the admin knows who is having trouble.
export const user = reactive({
  userName: "Doe",
  userMode: "admin",
  changeMode(newMode) {
    this.userMode = newMode;
  },
});

// When creating a new ticket, I want a fresh object with all the proper keys.
export const blankTicket = reactive({
  category: "",
  type: "",
  subject: "",
  description: "",
  docs: [],
  time: 0,
  user: "",
});

// An object of arrays, to help present only relevant 'types' in the form.
// Note: I have added 'Other' to the final list for the sake of consistency.
export const categories = reactive({
  Hardware: [
    "Laptop",
    "Mobile",
    "Peripherals",
    "Desk Phone",
    "Printers",
    "Other",
  ],
  Software: [
    "Teams/Zoom",
    "Mobile Blackberry",
    "Adobe",
    "Outlook",
    "Microsoft Office",
    "Other",
  ],
  Network: ["Network Access", "Connectivity", "VPN", "Drivers", "Other"],
  "In-Processing": [
    "Access Badge",
    "Common Access Card (CAC)",
    "SIPR",
    "Trello",
    "Other",
  ],
});

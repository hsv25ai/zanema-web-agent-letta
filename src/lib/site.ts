export const base = import.meta.env.BASE_URL.replace(/\/$/, "");
export const url = (path = "") => `${base}/${path.replace(/^\//, "")}`;
export const navigation = [
  { label: "Services", path: "services" },
  { label: "About", path: "about" },
  { label: "Our work", path: "our-work" },
  { label: "Markets", path: "markets" },
];
export const markets = [
  { name: "Texas", detail: "Plano headquarters" },
  { name: "Minnesota", detail: "Field operations" },
  { name: "Nebraska", detail: "Omaha market" },
  { name: "North Carolina", detail: "Field operations" },
  { name: "Virginia", detail: "Field operations" },
  { name: "Louisiana", detail: "Lafayette market" },
  { name: "Illinois", detail: "Field operations" },
];
export const services = [
  { slug: "underground", title: "Underground fiber", short: "Connections that begin below the surface.", description: "Fiber cable burial, drop placement, and boring support for telecommunications networks.", scope: ["Fiber cable and drop burial", "Underground drop placement", "Boring for telecommunications routes"], note: "Route conditions, utility information, footage, and restoration requirements are reviewed for each scope.", image: "field-cable.webp" },
  { slug: "splicing", title: "Splicing & installation", short: "From the fiber route to the final connection.", description: "Fiber splicing, customer installations, and cutover work that support network connections.", scope: ["Fiber splicing", "High-speed data and drop installation", "Cutover support"], note: "Installation and handoff requirements depend on the network, job scope, and project specifications.", image: "aerial-fiber.webp" },
  { slug: "aerial", title: "Aerial telecommunications", short: "Field support above ground.", description: "Aerial service work and transitions as part of telecommunications field operations.", scope: ["Aerial telecommunications service", "Aerial transitions", "Project-specific route support"], note: "Discuss equipment access, qualifications, and project requirements with our team before scheduling.", image: "aerial-fiber.webp" },
  { slug: "field", title: "Field preparation & service", short: "Attention to the work around the connection.", description: "White lining, service calls, and field support for telecommunications assignments.", scope: ["White lining / proposed route marking", "Service calls", "Field activity documentation"], note: "White lining identifies a proposed excavation route; it does not replace utility locating or 811 coordination.", image: "field-cable.webp" },
];
export const values = [
  { title: "Integrity", text: "Be clear about the work, the scope, and the commitments we make." },
  { title: "Accountability", text: "Take responsibility for our role and keep the right people informed." },
  { title: "Respect", text: "Value the people doing the work and the communities around it." },
  { title: "Continuous improvement", text: "Learn from each assignment and develop our capabilities responsibly." },
];

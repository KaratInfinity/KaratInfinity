export type SoftwareProduct = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  category: string;
  description: string;
  overview: string;
  capabilities: string[];
  outcomes: string[];
  accent: 'blue' | 'green' | 'aqua';
};

export const efactorPortalUrl =
  process.env.NEXT_PUBLIC_EFACTOR_PORTAL_URL ||
  'https://efactor.tech/index.php/dashboard/';

export const softwareProducts: SoftwareProduct[] = [
  {
    slug: 'enterprise-resource-planning',
    number: '01',
    title: 'Enterprise Resource Planning',
    shortTitle: 'ERP',
    category: 'Core operations',
    description: 'A shared operating layer for master data, workflows, approvals and cross-functional business processes.',
    overview: 'ERP connects the information and decisions that otherwise sit across departments. It gives teams a consistent foundation for running daily operations while keeping business context, access and accountability aligned.',
    capabilities: ['Shared business master data', 'Role-based workspaces', 'Cross-module workflows', 'Operational approvals', 'Company and branch context', 'Activity visibility'],
    outcomes: ['Reduce disconnected records', 'Standardise repeatable processes', 'Give teams one operational view'],
    accent: 'aqua',
  },
  {
    slug: 'finance-accounting',
    number: '02',
    title: 'Finance & Accounting',
    shortTitle: 'Finance',
    category: 'Financial control',
    description: 'Structured accounting, vouchers, ledgers and financial controls for confident day-to-day management.',
    overview: 'Finance & Accounting organises core financial work around controlled entries and clear records. It helps finance teams manage transactions consistently and keeps financial information connected to the wider operating system.',
    capabilities: ['Voucher management', 'General ledger workflows', 'Fiscal-year context', 'Approval-ready records', 'Account structures', 'Financial reporting foundations'],
    outcomes: ['Improve transaction control', 'Strengthen financial traceability', 'Create a reliable reporting base'],
    accent: 'green',
  },
  {
    slug: 'human-resource-management',
    number: '03',
    title: 'Human Resource Management',
    shortTitle: 'HRMS',
    category: 'People operations',
    description: 'The employee lifecycle in one place, from workforce records and attendance to leave and offboarding.',
    overview: 'HRMS gives people teams and employees a common workspace for recurring workforce processes. Employee information, attendance activity and lifecycle actions remain organised within the same company context.',
    capabilities: ['Employee directory', 'Attendance and shifts', 'Leave workflows', 'Employee self-service', 'Onboarding support', 'Exit management'],
    outcomes: ['Reduce manual HR coordination', 'Improve workforce visibility', 'Create a clearer employee experience'],
    accent: 'blue',
  },
  {
    slug: 'project-management',
    number: '04',
    title: 'Project Management',
    shortTitle: 'Projects',
    category: 'Delivery',
    description: 'Plan projects, organise work, coordinate teams and keep delivery knowledge connected from start to finish.',
    overview: 'Project Management brings projects, work items, teams, timelines and collaboration into one delivery workspace. It supports structured planning without losing the everyday context teams need to move work forward.',
    capabilities: ['Projects and work items', 'Boards and backlogs', 'Teams and roles', 'Milestones and meetings', 'Timesheets and planning', 'Documents and discussions'],
    outcomes: ['Make ownership visible', 'Connect plans with execution', 'Keep delivery history together'],
    accent: 'aqua',
  },
  {
    slug: 'sales-crm',
    number: '05',
    title: 'Sales & CRM',
    shortTitle: 'CRM',
    category: 'Customer growth',
    description: 'Manage leads, customer context, activities and sales follow-through through a connected commercial workspace.',
    overview: 'Sales & CRM helps commercial teams turn scattered prospect information into a consistent customer journey. Leads, activities and account context stay available as work moves from interest to an ongoing relationship.',
    capabilities: ['Lead management', 'Custom lead parameters', 'Prospect and customer views', 'Sales activities', 'Pipeline context', 'CRM reporting'],
    outcomes: ['Focus attention on the right leads', 'Preserve customer history', 'Improve sales follow-through'],
    accent: 'green',
  },
  {
    slug: 'inventory-management',
    number: '06',
    title: 'Inventory Management',
    shortTitle: 'Inventory',
    category: 'Stock operations',
    description: 'A controlled view of items, stock movement and availability across business locations.',
    overview: 'Inventory Management keeps item information and stock activity organised for operational teams. It is designed to improve visibility across locations while supporting the controls needed around movement and availability.',
    capabilities: ['Item masters', 'Stock visibility', 'Location-aware inventory', 'Movement records', 'Operational controls', 'Inventory reporting'],
    outcomes: ['Improve stock confidence', 'Reduce fragmented tracking', 'Support faster operational decisions'],
    accent: 'blue',
  },
  {
    slug: 'procurement',
    number: '07',
    title: 'Procurement',
    shortTitle: 'Procurement',
    category: 'Purchasing',
    description: 'Coordinate purchasing requests, supplier activity and approvals with clear ownership at every stage.',
    overview: 'Procurement structures the path from internal need to controlled purchasing. It connects requests, decisions and supplier-facing work so stakeholders can understand what is required, approved and in progress.',
    capabilities: ['Purchase requests', 'Approval workflows', 'Supplier context', 'Order coordination', 'Request status visibility', 'Cross-module handoffs'],
    outcomes: ['Make purchasing accountable', 'Reduce approval ambiguity', 'Connect demand with fulfilment'],
    accent: 'green',
  },
  {
    slug: 'document-management',
    number: '08',
    title: 'Document Management',
    shortTitle: 'DMS',
    category: 'Information control',
    description: 'Organise business documents with identity, versions, permissions and an auditable history.',
    overview: 'Document Management provides a dependable record for files created across the software suite. Documents can retain their business context while access, versions and history are managed consistently.',
    capabilities: ['Document identities', 'Version history', 'Access permissions', 'Audit activity', 'Module-linked files', 'Structured organisation'],
    outcomes: ['Create one document record', 'Protect business context', 'Improve retrieval and accountability'],
    accent: 'aqua',
  },
  {
    slug: 'manufacturing',
    number: '09',
    title: 'Manufacturing',
    shortTitle: 'Manufacturing',
    category: 'Production',
    description: 'Connect production planning, materials and operational records around the work being manufactured.',
    overview: 'Manufacturing supports the coordination required to turn plans and materials into traceable production work. It provides a structured base for aligning production activity with inventory and wider enterprise processes.',
    capabilities: ['Production planning', 'Material context', 'Work tracking', 'Operational records', 'Inventory connection', 'Process visibility'],
    outcomes: ['Align production information', 'Improve work traceability', 'Connect plant activity to the enterprise'],
    accent: 'blue',
  },
  {
    slug: 'asset-management',
    number: '10',
    title: 'Asset Management',
    shortTitle: 'Assets',
    category: 'Asset lifecycle',
    description: 'Maintain a clear record of business assets, responsibility, status and lifecycle activity.',
    overview: 'Asset Management gives teams a dependable view of the equipment and resources the business relies on. Ownership and status remain visible as assets move through their working lifecycle.',
    capabilities: ['Asset register', 'Assignment context', 'Lifecycle status', 'Location tracking', 'Maintenance-ready records', 'Asset reporting'],
    outcomes: ['Improve asset accountability', 'Reduce ownership gaps', 'Preserve lifecycle history'],
    accent: 'green',
  },
  {
    slug: 'e-label-studio',
    number: '11',
    title: 'e-Label Studio',
    shortTitle: 'e-Label',
    category: 'Connected product tools',
    description: 'Create and manage digital label experiences for connected products and customer-facing information.',
    overview: 'e-Label Studio supports the creation of structured digital product information that can be accessed through a connected label experience. It brings label content and product context into a manageable digital workflow.',
    capabilities: ['Digital label creation', 'Product information', 'Content organisation', 'Connected access', 'Publishing workflow', 'Customer-facing experiences'],
    outcomes: ['Modernise product information', 'Make label content easier to manage', 'Connect physical products to digital context'],
    accent: 'green',
  },
];

export function getSoftwareProduct(slug: string) {
  return softwareProducts.find((product) => product.slug === slug);
}

export default [
  { title: 'ID', value: 'id' },
  { title: 'Name', value: 'name' },
  { title: 'Email', value: 'email' },
  { title: 'Department', value: 'department', role: ['Engineering', 'HR', 'Sales'] },
  { title: 'Role', value: 'role', role: ['Developer', 'Manager', 'Tester'] },
  {
    title: 'Status', value: 'status', role: [
      { text: 'Active', value: true },
      { text: 'Inactive', value: false }
    ]
  },
  { title: 'Created At', value: 'createdAt' },
  { title: 'Action', value: 'action' }
]

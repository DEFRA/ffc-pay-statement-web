const statement1 = {
  businessName: 'Customer 1',
  email: 'customer1@email.com',
  frn: 1234567890,
  sbi: 123456789,
  address: {
    line1: 'Address 1',
    line2: 'Some Area',
    line3: 'Some Town',
    line4: 'Some Region',
    line5: 'Some County',
    postcode: 'FA1 2PY'
  },
  funding: [
    {
      name: 'Arable and horticultural soils',
      level: 'Introductory',
      area: '45.4545',
      rate: '22.00',
      annualValue: '1000.00',
      quarterlyValue: '250.00',
      quarterlyReduction: '0.00',
      quarterlyPayment: '250.00',
      reductions: [
        {
          reason: 'Over declaration reduction',
          value: '75.00'
        }
      ]
    },
    {
      name: 'Total',
      level: '',
      area: '45.4545',
      rate: '',
      annualValue: '1000.00',
      quarterlyValue: '250.00',
      quarterlyReduction: '0.00',
      quarterlyPayment: '250.00'
    }
  ],
  payments: [
    {
      invoiceNumber: 'S000000200000002V001',
      reference: Math.floor(Math.random() * 1000000000),
      dueDate: '1 August 2022',
      settled: '3 July 2022',
      calculated: '16 Jun 2022',
      value: '250.00',
      period: 'April to June 2022'
    }
  ],
  scheme: {
    name: 'Sustainable Farming Incentive',
    shortName: 'SFI',
    year: '2022',
    frequency: 'Quarterly',
    agreementNumber: 'SFI1234567'
  },
  documentReference: 1,
  remainingAmount: 0
}

const statement2 = {
  ...statement1,
  payments: [{ ...statement1.payments[0], reference: Math.floor(Math.random() * 1000000000), period: 'July to Sep 2022' }]
}

const statement3 = {
  ...statement1,
  payments: [{ ...statement1.payments[0], reference: Math.floor(Math.random() * 1000000000), period: 'Oct to Dec 2022' }]
}

const statement4 = {
  businessName: 'Customer 2',
  email: 'customer2@email.com',
  frn: 9876543210,
  sbi: 123456789,
  address: {
    line1: 'Address 2',
    line2: 'Some Area',
    line3: 'Some Town',
    line4: 'Some Region',
    line5: 'Some County',
    postcode: 'FA1 2PY'
  },
  funding: [
    {
      name: 'Arable and horticultural soils',
      level: 'Introductory',
      area: '45.4545',
      rate: '22.00',
      annualValue: '1000.00',
      quarterlyValue: '250.00',
      quarterlyReduction: '0.00',
      quarterlyPayment: '250.00',
      reductions: [
        {
          reason: 'Over declaration reduction',
          value: '75.00'
        }
      ]
    },
    {
      name: 'Total',
      level: '',
      area: '45.4545',
      rate: '',
      annualValue: '1000.00',
      quarterlyValue: '250.00',
      quarterlyReduction: '0.00',
      quarterlyPayment: '250.00'
    }
  ],
  payments: [
    {
      invoiceNumber: 'S000000200000002V001',
      reference: '10027651',
      dueDate: '1 August 2022',
      settled: '3 July 2022',
      calculated: '16 Jun 2022',
      value: '250.00',
      period: 'April to June 2022'
    }
  ],
  scheme: {
    name: 'Sustainable Farming Incentive',
    shortName: 'SFI',
    year: '2022',
    frequency: 'Quarterly',
    agreementNumber: 'SFI1234567'
  },
  documentReference: 2,
  remainingAmount: 0
}

const statement5 = {
  ...statement4,
  payments: [{ ...statement4.payments[0], reference: Math.floor(Math.random() * 1000000000), period: 'July to Sep 2022' }]
}

module.exports = [
  statement1,
  statement2,
  statement3,
  statement4,
  statement5
]

import type { Contact } from '@prisma/client'

import {
  contacts,
  contact,
  createContact,
  updateContact,
  deleteContact,
} from './contacts'
import type { StandardScenario } from './contacts.scenarios'

describe('contacts', () => {
  scenario('returns all contacts', async (scenario: StandardScenario) => {
    const result = await contacts()

    expect(result.length).toEqual(Object.keys(scenario.contact).length)
  })

  scenario('returns a single contact', async (scenario: StandardScenario) => {
    const result = await contact({ id: scenario.contact.one.id })

    expect(result).toEqual(scenario.contact.one)
  })

  scenario('creates a contact', async () => {
    const result = await createContact({
      input: { name: 'String', email: 'valid@example.com', message: 'String' }, // 유효한 이메일 주소 사용
    })

    expect(result.name).toEqual('String')
    expect(result.email).toEqual('valid@example.com')
    expect(result.message).toEqual('String')
  })

  scenario('updates a contact', async (scenario: StandardScenario) => {
    const original = (await contact({ id: scenario.contact.one.id })) as Contact
    const result = await updateContact({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a contact', async (scenario: StandardScenario) => {
    const original = (await deleteContact({
      id: scenario.contact.one.id,
    })) as Contact
    const result = await contact({ id: original.id })

    expect(result).toEqual(null)
  })
})

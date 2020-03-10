import { AtomicVCV1 } from '@bloomprotocol/vc-common';
import { Subject, GovernmentOrg } from './base';
import { Person, Organization } from 'schema-dts';

//////////////////////////////////////////////////////////////
// SSN/National ID number
//////////////////////////////////////////////////////////////
export interface VCSNatIDNumPerson extends Subject<Person> {
  '@type': 'Person';
  location: {
    '@type': 'Role';
    location: GovernmentOrg;
    identifier: {
      '@type': 'PropertyValue';
      propertyID: string;
      value: string | number;
    };
  };
}
export interface VCSNatIDNumOrganization extends Subject<Organization> {
  '@type': 'Organization';
  nationality: {
    '@type': 'Role';
    nationality: GovernmentOrg;
    identifier: {
      '@type': 'PropertyValue';
      propertyID: string;
      value: string | number;
    };
  };
}
export type VCNatIDNumPerson = AtomicVCV1<VCSNatIDNumPerson>;
export type VCNatIDNumOrganization = AtomicVCV1<VCSNatIDNumOrganization>;

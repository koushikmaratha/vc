import {IVerifiablePresentation, VerifiablePresentationV1} from '@bloomprotocol/attestations-common'

import {validateVerifiablePresentationResponseV0, ValidateVerifiablePresentationResponseOptionsV0} from './v0'
import {validateVerifiablePresentationResponseV1, ValidateVerifiablePresentationResponseOptionsV1} from './v1'
import {ValidationResponse} from './shared/types'

type Version = 'v0' | 'v1'

type VersionToResponse = {
  v0: IVerifiablePresentation
  v1: VerifiablePresentationV1
}

type VersionToOptions = {
  v0: ValidateVerifiablePresentationResponseOptionsV0
  v1: ValidateVerifiablePresentationResponseOptionsV1
}

type ValidateVerifiablePresentationOptions<V extends Version> = VersionToOptions[V] & {
  version?: V
}

export const validateVerifiablePresentationResponse = async <V extends Version = 'v0'>(
  data: any,
  {version, ...options}: ValidateVerifiablePresentationOptions<V> = {},
): Promise<ValidationResponse<VersionToResponse[V]>> => {
  if (typeof version === 'undefined' || version === 'v0') {
    return (await validateVerifiablePresentationResponseV0(
      data,
      options as ValidateVerifiablePresentationResponseOptionsV0,
    )) as ValidationResponse<VersionToResponse[V]>
  } else if (version === 'v1') {
    return (await validateVerifiablePresentationResponseV1(
      data,
      options as ValidateVerifiablePresentationResponseOptionsV1,
    )) as ValidationResponse<VersionToResponse[V]>
  } else {
    return {
      kind: 'invalid',
      errors: [
        {
          key: 'invalid_version',
          message: `Invalid version passed: ${version}`,
        },
      ],
    }
  }
}

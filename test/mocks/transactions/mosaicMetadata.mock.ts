/*
 *
 * Copyright 2018-present NEM
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

import { Convert, Deadline, MosaicMetadataTransaction, NetworkType, UInt64 } from 'symbol-sdk';

import { account1 } from '../accounts.mock';
import { mosaicId1 } from '../mosaics.mock';

export const unsignedMosaicMetadata1 = MosaicMetadataTransaction.create(
    Deadline.create(),
    account1.address,
    UInt64.fromUint(1000),
    mosaicId1,
    1,
    Convert.uint8ToUtf8(new Uint8Array(10)),
    NetworkType.MIJIN_TEST,
    new UInt64([1, 0]),
);

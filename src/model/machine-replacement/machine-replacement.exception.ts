/*
 * Copyright (c) 2022 Tobias Briones. All rights reserved.
 *
 * SPDX-License-Identifier: GPL-3.0-or-later
 *
 * This file is part of 2DP Repsymo Solver.
 *
 * This source code is licensed under the GNU General Public License v3.0 or
 * later License found in the LICENSE file in the root directory of this source
 * tree or at https://opensource.org/licenses/GPL-3.0.
 */

import { InvalidModelException } from '../exception';

export class MachineReplacementException extends InvalidModelException {
  constructor(msg: string) {
    super('Machine Replacement', msg);
  }
}

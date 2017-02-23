// Copyright 2017 Monax Industries Limited
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package server

import (
	"container/list"
	"fmt"
)

// Simple id pool. Lets you get and release uints. Will panic
// if trying to get an id and it's empty.
type IdPool struct {
	ids *list.List
}

func NewIdPool(totNum uint) *IdPool {
	idPool := &IdPool{}
	idPool.init(totNum)
	return idPool
}

// We start from 1, so that 0 is not used as an id.
func (idp *IdPool) init(totNum uint) {
	idp.ids = list.New()
	for i := uint(1); i <= totNum; i++ {
		idp.ids.PushBack(i)
	}
}

// Get an id from the pool.
func (idp *IdPool) GetId() (uint, error) {
	if idp.ids.Len() == 0 {
		return 0, fmt.Errorf("Out of IDs")
	}
	val := idp.ids.Front()
	idp.ids.Remove(val)
	num, _ := val.Value.(uint)
	return num, nil
}

// Release an id back into the pool.
func (idp *IdPool) ReleaseId(id uint) {
	idp.ids.PushBack(id)
}

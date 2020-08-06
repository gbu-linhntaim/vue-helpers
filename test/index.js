import {array} from '../src'

import mocha from 'mocha'
import chai from 'chai'

const describe = mocha.describe
const it = mocha.it
const expect = chai.expect
chai.should()

describe('vue-helpers', function () {
    describe('unit tests', function () {
        describe('array', function () {
            it('range function - increment', function (done) {
                const input = {
                    start: 1,
                    end: 10,
                }
                const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

                // app
                const result = array.range(input.start, input.end)

                // assertion
                result.should.deep.equal(expected)

                done()
            })

            it('range function - decrement', function (done) {
                const input = {
                    start: 10,
                    end: 1,
                }
                const expected = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

                // app
                const result = array.range(input.start, input.end)

                // assertion
                result.should.deep.equal(expected)

                done()
            })

            it('range function - increment - step', function (done) {
                const input = {
                    start: 1,
                    end: 7,
                    step: 2,
                }
                const expected = [1, 3, 5, 7]

                // app
                const result = array.range(input.start, input.end, input.step)

                // assertion
                result.should.deep.equal(expected)

                done()
            })

            it('range function - increment - step - negative', function (done) {
                const input = {
                    start: 1,
                    end: 7,
                    step: -2,
                }
                const expected = [1, 3, 5, 7]

                // app
                const result = array.range(input.start, input.end, input.step)

                // assertion
                result.should.deep.equal(expected)

                done()
            })

            it('range function - decrement - step - negative', function (done) {
                const input = {
                    start: 7,
                    end: 1,
                    step: -2,
                }
                const expected = [7, 5, 3, 1]

                // app
                const result = array.range(input.start, input.end, input.step)

                // assertion
                result.should.deep.equal(expected)

                done()
            })
        })
    })
})
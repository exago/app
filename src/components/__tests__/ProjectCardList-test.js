import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import ProjectCardList from '../ProjectCardList/ProjectCardList';
import { getTestResults, getThirdParties } from '../ProjectCardList/dataFormatter';
import * as popoverHtml from '../ProjectCardList/popoverHtml';
import { withTheme } from './WithTheme';

const dataMock = {
  data: {
    codestats: {
      Assertion: 0,
      CLOC: 35,
      ExportedFunction: 1,
      ExportedMethod: 2,
      Function: 5,
      FunctionLOC: 112,
      GoStatement: 0,
      IfStatement: 34,
      Import: 19,
      Interface: 0,
      LOC: 342,
      Method: 6,
      MethodLOC: 168,
      NCLOC: 307,
      NOF: 3,
      Struct: 5,
      SwitchStatement: 1,
      Test: 0
    },
    projectrunner: {
      third_parties: [],
      checklist: {
        Failed: [
          {
            Category: 'extraCredit',
            Desc: 'Blackbox Tests: In addition to standard tests, does the project have blackbox tests?',
            Name: 'hasBlackboxTests'
          },
          {
            Category: 'goodCitizen',
            Desc: 'Contribution Process: Does the project document a contribution process?',
            Name: 'hasContributing'
          },
          {
            Category: 'extraCredit',
            Desc: 'Benchmarks: In addition to tests, does the project have benchmarks?',
            Name: 'hasBenches'
          }
        ],
        Passed: [
          {
            Category: 'minimumCriteria',
            Desc: 'README Presence: Does the project\'s include a documentation entrypoint?',
            Name: 'hasReadme'
          },
          {
            Category: 'minimumCriteria',
            Desc: 'Licensed: Does the project have a license?',
            Name: 'hasLicense'
          },
          {
            Category: 'minimumCriteria',
            Desc: 'golint Correctness: Is the linter satisfied?',
            Name: 'isLinted'
          },
          {
            Category: 'minimumCriteria',
            Desc: 'gofmt Correctness: Is the code formatted correctly?',
            Name: 'isFormatted'
          },
          {
            Category: 'minimumCriteria',
            Desc: 'Directory Names and Packages Match: Does each package <pkg> ' +
                  'statement\'s package name match the containing directory name?',
            Name: 'isDirMatch'
          },
          {
            Category: 'minimumCriteria',
            Desc: 'Compiles: Does the project build?',
            Name: 'projectBuilds'
          },
          {
            Category: 'minimumCriteria',
            Desc: 'go tool vet Correctness: Is the Go vet satisfied?',
            Name: 'isVetted'
          }
        ]
      },
      packages: [
      ],
      execution_time: {
        goget: '1.151458244s',
        goprove: '339.318887ms',
        gotest: '870.398525ms'
      },
      raw_output: {
        goget: '',
        gotest: '?   \tgithub.com/jgautheron/goconst\t[no test files]\n?   \tgithub.com/jgautheron/goconst/cmd/goconst\t[no test files]\n'
      },
      errors: {
        goget: '',
        gotest: ''
      }
    },
    lintmessages: {
      'cmd/goconst/main.go': {
        gocyclo: [
          {
            col: 0,
            line: 88,
            message: 'cyclomatic complexity 16 of function printOutput() is high (> 10)',
            severity: 'warning'
          }
        ],
        vet: [
          {
            col: 0,
            line: 55,
            message: 'arg usage in Fprint call is a function value, not a function call',
            severity: 'error'
          }
        ]
      },
      'parser.go': {
        errcheck: [
          {
            col: 16,
            line: 65,
            message: 'error return value not checked (filepath.Walk(p.path[:pathLen-3], ' +
                     'func(path string, f os.FileInfo, err error) error {)',
            severity: 'warning'
          },
          {
            col: 15,
            line: 73,
            message: 'error return value not checked (p.parseDir(path))',
            severity: 'warning'
          },
          {
            col: 13,
            line: 78,
            message: 'error return value not checked (p.parseDir(p.path))',
            severity: 'warning'
          }
        ],
        golint: [
          {
            col: 6,
            line: 24,
            message: 'exported type Parser should have comment or be unexported',
            severity: 'warning'
          },
          {
            col: 6,
            line: 125,
            message: 'exported type Strings should have comment or be unexported',
            severity: 'warning'
          },
          {
            col: 6,
            line: 126,
            message: 'exported type Constants should have comment or be unexported',
            severity: 'warning'
          },
          {
            col: 6,
            line: 128,
            message: 'exported type ConstType should have comment or be unexported',
            severity: 'warning'
          },
          {
            col: 6,
            line: 133,
            message: 'exported type ExtendedPos should have comment or be unexported',
            severity: 'warning'
          }
        ]
      },
      'visitor.go': {
        gocyclo: [
          {
            col: 0,
            line: 21,
            message: 'cyclomatic complexity 28 of function (*treeVisitor).Visit() is high (> 10)',
            severity: 'warning'
          }
        ]
      }
    },
    metadata: {
      image: 'https://avatars.githubusercontent.com/u/683888?v=3',
      description: 'Find in Go repeated strings that could be replaced by a constant',
      stars: 60,
      last_push: '2016-05-14T19:25:25Z'
    },
    score: {
      value: 46.83003447187171,
      rank: 'F',
      details: [
        {
          name: 'imports',
          score: 100,
          weight: 1.5,
          desc: 'counts the number of third party libraries',
          msg: '0 third-party package(s)',
          url: 'https://github.com/jgautheron/gogetimports'
        },
        {
          name: 'codestats',
          score: 3.6801869312205877,
          weight: 1,
          desc: 'counts lines of code, comments, functions, structs, imports etc in Go code',
          msg: '35 comments for 342 lines of code',
          url: 'https://github.com/jgautheron/golocc'
        },
        {
          name: 'testduration',
          score: 0,
          weight: 1.2,
          desc: 'measures time taken for testing',
          msg: 'no tests',
          url: 'https://golang.org/pkg/testing/'
        },
        {
          name: 'checklist',
          score: 94.56521739130436,
          weight: 1.8,
          desc: 'inspects project for the best practices listed in the Go CheckList',
          msg: '',
          url: 'https://github.com/karolgorecki/goprove',
          details: [
            {
              name: 'isLinted',
              score: 100,
              weight: 0.5,
              msg: 'check succeeded',
              url: 'https://github.com/matttproud/gochecklist/blob/master/publication/code_correctness.md'
            },
            {
              name: 'hasBenches',
              score: 0,
              weight: 0.5,
              msg: 'check failed'
            },
            {
              name: 'projectBuilds',
              score: 100,
              weight: 1.5,
              msg: 'check succeeded',
              url: 'https://github.com/matttproud/gochecklist/blob/master/publication/compilation.md'
            },
            {
              name: 'isFormatted',
              score: 100,
              weight: 3,
              msg: 'check succeeded',
              url: 'https://github.com/matttproud/gochecklist/blob/master/publication/code_correctness.md'
            },
            {
              name: 'hasReadme',
              score: 100,
              weight: 3,
              msg: 'check succeeded',
              url: 'https://github.com/matttproud/gochecklist/blob/master/publication/documentation_entrypoint.md'
            },
            {
              name: 'isDirMatch',
              score: 100,
              weight: 0.7,
              msg: 'check succeeded',
              url: 'https://github.com/matttproud/gochecklist/blob/master/publication/dir_pkg_match.md'
            }
          ]
        },
        {
          name: 'testcoverage',
          score: 0,
          weight: 3,
          desc: 'measures pourcentage of code covered by tests',
          msg: 'no tests',
          url: 'https://golang.org/pkg/testing/'
        },
        {
          name: 'lintmessages',
          score: 83.9088918595423,
          weight: 2,
          desc: 'runs a whole bunch of Go linters',
          msg: '',
          url: 'https://github.com/alecthomas/gometalinter',
          details: [
            {
              name: 'errcheck',
              score: 83.9088918595423,
              weight: 2,
              desc: 'finds unchecked errors in Go code',
              msg: 'exceeds the warnings/LOC threshold',
              url: 'https://github.com/kisielk/errcheck'
            }
          ]
        }
      ]
    },
    execution_time: '8s',
    last_update: '2016-07-14T23:26:41.188233588+02:00'
  },
  status: 'success'
};

describe('ProjectCardList', () => {
  const pcl = shallow(<ProjectCardList data={dataMock.data} />);
  pcl.setProps({ data: dataMock.data });

  it('should render correctly', () => {
    return expect(pcl).toExist();
  });

  const cards = pcl.find('div > div');

  it('should render 8 ProjectCards', () => {
    return expect(cards.length).toBe(8);
  });

  it('ProjectCards should have correct title & value', () => {
    expect(cards.at(0).children().props().title).toBe('Total/Average Lines');
    expect(cards.at(0).children().props().value).toBe('342 / 114');
    expect(cards.at(2).children().props().title).toBe('Third Parties');
    expect(cards.at(2).children().props().value).toBe(0);
  });

  it('should prepareData when will receive props', () => {
    expect(pcl.instance().props.data.projectrunner.raw_output.gotest).toNotBe('');

    dataMock.data.projectrunner.raw_output.gotest = '';
    delete dataMock.data.projectrunner.checklist;

    dataMock.data.codestats.Test = 1;

    pcl.setProps(dataMock);
    expect(pcl.instance().props.data.projectrunner.raw_output.gotest).toBe('');
  });

  describe('getThirdParties (dataFormatter)', () => {
    it('should return 0 when third parties do not exist', () => {
      expect(getThirdParties({ projectrunner: {} })).toEqual(0);
    });
  });

  describe('getTestResults', () => {
    it('returns no results when no package was tested', () => {
      expect(getTestResults({ projectrunner: {} })).toEqual({
        coverageMean: '',
        durationMean: '',
        testsPassed: false
      });
    });
    it('returns coverage and duration mean', () => {
      expect(getTestResults({
        projectrunner: {
          packages: [
            { success: false, coverage: 10, execution_time: 5 },
            { success: true }
          ]
        },
        codestats: {
          Test: 1
        }
      })).toEqual({ coverageMean: '10.00 %', durationMean: '5.000s', testsPassed: false });
    });
  });

  describe('popoverHtml', () => {
    describe('getScoreDetails', () => {
      it('should return empty when no score data is there', () => {
        expect(popoverHtml.getScoreDetails({ score: {} })).toEqual('');
      });
    });

    describe('getChecklist', () => {
      it('should return empty when no score data is there', () => {
        expect(popoverHtml.getChecklist({ projectrunner: {} })).toEqual('');
      });

      it('should show the checklist', () => {
        const mock = {
          projectrunner: {
            checklist: {
              Failed: [
                { Category: 'extraCredit', Desc: 'fooDescription', Name: 'fooName' },
                { Category: 'goodCitizen', Desc: 'barDescription', Name: 'barName' },
                { Category: 'minimumCriteria', Desc: 'mooDescription', Name: 'mooName' }
              ],
              Passed: [
                { Category: 'extraCredit', Desc: 'fooDescriptionOK', Name: 'fooNameOK' },
                { Category: 'goodCitizen', Desc: 'barDescriptionOK', Name: 'barNameOK' },
                { Category: 'minimumCriteria', Desc: 'mooDescriptionOK', Name: 'mooNameOK' }
              ]
            }
          }
        };

        const passed = mock.projectrunner.checklist.Passed;
        const failed = mock.projectrunner.checklist.Failed;

        const checklist = shallow(withTheme(popoverHtml.getChecklist(mock)));
        const cols = checklist.find('TableRowColumn');

        expect(cols.at(0).children().node).toEqual(passed[2].Desc);
        expect(cols.at(1).children().text()).toEqual('<ActionCheckCircle />');
        expect(cols.at(2).children().node).toEqual(failed[2].Desc);
        expect(cols.at(3).children().text()).toEqual('<AlertError />');

        expect(cols.at(4).children().node).toEqual(passed[1].Desc);
        expect(cols.at(5).children().text()).toEqual('<ActionCheckCircle />');
        expect(cols.at(6).children().node).toEqual(failed[1].Desc);
        expect(cols.at(7).children().text()).toEqual('<AlertError />');

        expect(cols.at(8).children().node).toEqual(passed[0].Desc);
        expect(cols.at(9).children().text()).toEqual('<ActionCheckCircle />');
        expect(cols.at(10).children().node).toEqual(failed[0].Desc);
        expect(cols.at(11).children().text()).toEqual('<AlertError />');
      });
    });

    describe('getTestCoverage', () => {
      it('should return empty when no packages data is there', () => {
        expect(popoverHtml.getTestCoverage({ projectrunner: { packages: [] } })).toEqual('');
      });

      it('should show coverage info', () => {
        const mock = {
          projectrunner: {
            packages: [
              { name: 'foo', coverage: 10 },
              { name: 'bar', coverage: 20 },
              { name: 'moo', coverage: 100 }
            ]
          }
        };
        const { projectrunner: { packages: pkgs } } = mock;
        const testCoverage = shallow(withTheme(popoverHtml.getTestCoverage(mock)));
        const cols = testCoverage.find('TableRowColumn');

        expect(cols.at(0).children().text()).toEqual(pkgs[0].name);
        expect(cols.at(1).children().node).toEqual(pkgs[0].coverage);

        expect(cols.at(2).children().text()).toEqual(pkgs[1].name);
        expect(cols.at(3).children().node).toEqual(pkgs[1].coverage);

        expect(cols.at(4).children().text()).toEqual(pkgs[2].name);
        expect(cols.at(5).children().node).toEqual(pkgs[2].coverage);
      });
    });

    describe('getThirdParties', () => {
      it('should return empty when no imports data is there', () => {
        expect(popoverHtml.getThirdParties({ projectrunner: { third_parties: [] } })).toEqual('');
      });

      it('should render ProjectThirdParties', () => {
        const mock = { projectrunner: { third_parties: ['foo', 'bar', 'moo'] } };
        const thirdParties = shallow(withTheme(popoverHtml.getThirdParties(mock)));
        expect(thirdParties.find('ProjectThirdParties').length).toEqual(1);
      });
    });

    describe('getTestDuration', () => {
      it('should return empty when no score data is there', () => {
        expect(popoverHtml.getTestDuration({ projectrunner: {} })).toEqual('');
      });

      it('should show tests duration', () => {
        const mock = {
          projectrunner: {
            packages: [
              { name: 'foo', execution_time: 10 },
              { name: 'bar', execution_time: 20 },
            ]
          }
        };

        const pkgs = mock.projectrunner.packages;
        const testDuration = shallow(withTheme(popoverHtml.getTestDuration(mock)));
        const cols = testDuration.find('TableRowColumn');

        expect(cols.at(0).children().node).toEqual(pkgs[0].name);
        expect(cols.at(1).children().node).toEqual(pkgs[0].execution_time);

        expect(cols.at(2).children().node).toEqual(pkgs[1].name);
        expect(cols.at(3).children().node).toEqual(pkgs[1].execution_time);
      });
    });

    describe('getTestList', () => {
      it('should return empty when no score data is there', () => {
        expect(popoverHtml.getTestList({ projectrunner: {} })).toEqual('');
      });

      it('should generate test list', () => {
        const mock = {
          projectrunner: {
            packages: [
              {
                tests: [
                  { name: 'foo', passed: true, execution_time: 5 },
                  { name: 'bar', passed: false, execution_time: 1 }
                ],
              }
            ]
          }
        };
        const testMock = mock.projectrunner.packages[0].tests;
        const testList = shallow(withTheme(popoverHtml.getTestList(mock)));
        const cols = testList.find('TableRowColumn');

        expect(cols.at(0).children().node).toEqual(testMock[0].name);
        expect(cols.at(1).children().node).toEqual(testMock[0].execution_time);
        expect(cols.at(2).children().text()).toEqual('<ActionCheckCircle />');

        expect(cols.at(3).children().node).toEqual(testMock[1].name);
        expect(cols.at(4).children().node).toEqual(testMock[1].execution_time);
        expect(cols.at(5).children().text()).toEqual('<AlertError />');
      });
    });
  });
});

const hrTeam = { id: 1, dname: '인사팀' };
const devTeam = { id: 2, dname: '개발팀' };
const depts = [hrTeam, devTeam];
const hong = { id: 1, name: 'Hong', dept: 1 };
const kim = { id: 2, name: 'Kim', dept: 2 };
const emps = [
	hong,
	kim,
	{ id: 3, name: 'Park', dept: 2 },
	{ id: 4, name: 'Choi', dept: 2 },
];

const deptMap = new Map(depts.map(d => [d.dname, d]));
console.log(deptMap);

const deptIdMap = new Map(depts.map(d => [d.id, d]));

const empDept = new Map(
	// emps.map(e => [e, depts[e.dept - 1]])
	// emps.map(e => [e, depts.find(d => d.id === e.dept)])
	// emps.map(e => [e, deptIdMap.get(e.dept)])
	emps.map(e => {
		const d = deptIdMap.get(e.dept);
		return [(delete e.dept, e), d];
	})
);
console.log(empDept);

console.log('------->', empDept.get(kim)?.dname); // '개발팀'

// 개발팀 직원 목록 출력 ⇒ Kim, Park, Choi
const devEmpNames = [...empDept]
	// .filter(ed => ed[1].dname === devTeam.dname)
	.filter(([, dept]) => dept.dname === devTeam.dname)
	.map(([e]) => e.name);
console.log(devEmpNames.join(', '));

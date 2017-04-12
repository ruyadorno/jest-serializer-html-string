/* eslint-env jest */

const unfmtHtml =
`<body>
			<div class="home active">
				<h1><img src="/foo.png" alt="Foo"/></h1><div>Hello</div>
				<p><span class="something">Hey</span>
				<img src="/foo.png" /></p>
			</div>
		</body>
`;

describe('jest-serializer-html-string', () => {
	it('should reformat a given html', () => {
		expect(unfmtHtml).toMatchSnapshot();
	});

	it('should not reformat something that is not an html string', () => {
		expect(2).toMatchSnapshot();
		expect(true).toMatchSnapshot();
		expect([]).toMatchSnapshot();
		expect({}).toMatchSnapshot();
		expect('Non html tags strings').toMatchSnapshot();
	});
});

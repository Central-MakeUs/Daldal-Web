import DisabledFormElement from '@components/molecules/form/DisabledFormElement';
import { accountFormLabelMapping } from '@mocks/form';
import { Account, AccountFormName } from '@models/form/entity/account';

type DisabledAccountFormProps = {
	defaultValues: Account;
};

const DisabledAccountForm = ({ defaultValues }: DisabledAccountFormProps) => {
	return (
		<div className="flex flex-col gap-7">
			{Object.entries(defaultValues).map(([name, value], index) => (
				<DisabledFormElement
					key={`disabledAccountForm#${index}`}
					label={accountFormLabelMapping[name as AccountFormName]}
					value={value}
				/>
			))}
		</div>
	);
};

export default DisabledAccountForm;
